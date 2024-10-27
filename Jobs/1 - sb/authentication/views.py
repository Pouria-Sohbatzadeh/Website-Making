from django.contrib.auth.tokens import default_token_generator as token_generator
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.shortcuts import render, redirect,get_object_or_404
from django.contrib.sites.shortcuts import get_current_site
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.utils.encoding import force_bytes, force_str
from django.template.loader import render_to_string
from django.db.models.signals import post_save
from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.dispatch import receiver
from .forms import ProfileUpdateForm
from home.forms import CommentForm,ReplyCommentForm
from django.contrib import messages
from .models import Profile
from home import models
from . import forms




# Sign Up View
def signup(request):
    if request.method == 'POST':
        signupform = forms.SignUpForm(request.POST)
        if signupform.is_valid():
            cd = signupform.cleaned_data
            if cd['password'] == cd['password1']:
                if User.objects.filter(username=cd['username']).exists():
                    messages.success(request,'این نام کاربری وجود دارد')
                    redirect('signup')
                else:
                    user = User.objects.create_user(cd['username'], cd['email'], cd['password'])
               
                    user.save()
                    messages.success(request, 'حساب کاربری شما ساخته شد')
                    return redirect('signin')
            else:
                messages.error(request, 'رمز اول با رمز دوم همخوانی ندارند')
    else:
        signupform = forms.SignUpForm()
    return render(request, 'home/signup.html', {'suf': signupform})

# Sign In View
def signin(request):
    if request.method == 'POST':
        signinform = forms.SignInForm(request.POST)
        if signinform.is_valid():
            username = request.POST['username']
            password = request.POST['password']
            
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                messages.success(request, 'با موفقیت وارد شدید')
                return redirect('profile')
            else:
                messages.error(request, 'رمز یا نام کاربری اشتباه است')
    else:
        signinform = forms.SignInForm()

    return render(request, 'home/signin.html', {'sif': signinform})

# Sign Out View
def signout(request):
    logout(request)
    messages.success(request, 'با موفقیت خارج شدید')
    return redirect('home')

# Add to Profile View
@login_required
def add_to_profile(request):
    if request.method == 'POST':
        course_id = request.POST.get('course_id')  

        try:
            course = models.Course.objects.get(id=course_id)
            user_profile = request.user.profile  
            user_profile.courses.add(course)  
            user_profile.save()  
            messages.success(request, 'دوره با موفقیت اضافه شد')
            return redirect('profile')  
        except models.Course.DoesNotExist:
            messages.error(request, 'دوره پیدا نشد')
            return redirect('course_not_found')  # Handle the case where the course doesn't exist
    
    return redirect('invalid_request')  # Handle invalid request method

# Profile View
@login_required
def profile(request):
    if request.method == 'POST':
        form = ProfileUpdateForm(request.POST, request.FILES, instance=request.user.profile)
        if form.is_valid():
            form.save()
            return redirect('profile')  # Redirect به صفحه پروفایل یا صفحه مورد نظر
    else:
        form = ProfileUpdateForm(instance=request.user.profile)
    

    user_profile = request.user.profile  # Get the current user's profile
    courses = user_profile.courses.all()  # Get all courses associated with the user's profile
    
    # Comment
    comments = models.Comment.objects.filter(user__exact= request.user)


    return render(request,'home/profile.html', {'comments':comments,'courses':courses,'form':form,})
                                                

# Signal to create Profile on User creation
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

@login_required
def delete_course_from_profile(request, course_id):
    course = get_object_or_404(models.Course, id=course_id)
    user_profile = request.user.profile
    user_profile.courses.remove(course)  # Remove the course from the user's profile
    return redirect('profile')

# Comment view
def course_detail(request, course_id):
    global comments
    course = get_object_or_404(models.Course, id=course_id)
    comments = course.comments.all()  # Assuming you have a related name 'comments' for the comments

    if request.method == 'POST':
        comment_form = CommentForm(request.POST)
        if comment_form.is_valid():
            comment = comment_form.save(commit=False)
            comment.course = course
            comment.user = request.user  # Assuming user is authenticated
            comment.save()
            return redirect('course_detail', course_id=course.id)
        reply_form = ReplyCommentForm(request.POST)
        
        
        if reply_form.is_valid():
            reply = reply_form.save(commit=False)
            reply.comment = comments
            reply.user = request.user
            reply.save()
            return redirect('course_detail', course_id=course.id)
    else:
        comment_form = CommentForm()
    # Reply    

    return render(request, 'home/course-details.html', {
        'course': course,
        'comments': comments,
        'comment_form': comment_form,
        'reply': reply_form,
        
    })
    
# Comment view
@login_required
def delete_comment_from_profile(request, comment_id):
    # Get the specific comment for the user
    comment = get_object_or_404(models.Comment, id=comment_id, user=request.user)

    # Delete the comment
    comment.delete()

    return redirect('profile')

@login_required
def delete_acc(request):
# Delete account
    if request.method == 'POST':
        print('request.POST')
        if 'button1' in request.POST:
            user = request.user
            user.delete()
     
    messages.success(request,'متاسفیم که نتوانستیم نیاز های شما را برطرف کنیم')        
    return redirect('signin')            