from django.shortcuts import render, redirect, get_object_or_404
from . import models as model
from . import forms as form
from authentication.forms import *
from collections import Counter
from django.contrib import messages
from django.core.paginator import Paginator
from .forms import ArezeForm

# Create your views here.
def index(request):
    teacher = model.Teacher.objects.all()     
    course = model.Course.objects.all()
    
    context = {
        'teacher': teacher,
        'course' : course,
    }    
    return render(request , 'home/index.html' , context)

def Courses(request):
    order = request.GET.get('order')
    courses = model.Course.objects.all()

    if order == 'high_to_low':
        courses = sorted(courses, key=lambda course: course.average_rating(), reverse=True)
    elif order == 'low_to_high':
        courses = sorted(courses, key=lambda course: course.average_rating())
    elif order == 'latest':
        courses = courses.order_by('-created_at')  
        
    paginator = Paginator(courses, 18)
    
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)    
    
    context = {
        'course' : courses,
        'order' : order,
        'page_obj' : page_obj,
    }  
    return render(request , 'home/course.html', context)


def CourseDetails(request, pk):
    comment_limit = 10
    # user = get_object_or_404(User)
    # profile = get_object_or_404(Profile, user=user)
    course = model.Course.objects.get(id=pk)
    syllabus = model.CourseSyllabus.objects.all()
    syllabusname = model.CourseSyllabusName.objects.all().first
    # Fetch the related syllabus for the course
    syllabusa = get_object_or_404(model.CourseSyllabus, course=course)
    # Fetch all CourseSyllabusName entries related to the syllabus
    syllabus_names = model.CourseSyllabusName.objects.filter(coursesyllabus=syllabusa)
    comments = course.comments.order_by('-created_at')  # دریافت 5 نظر اخیر
    average_rating = course.average_rating()  # میانگین امتیاز
    replys = model.ReplyComment.objects.filter()
    reply_form = form.ReplyCommentForm(request.POST or None)    
    # محاسبه تعداد هر نمره
    ratings = [comment.rating for comment in comments]
    rating_counts = Counter(ratings)
    total_ratings = len(ratings)
    
    # محاسبه درصد برای هر نمره
    rating_percentages = {
        i: (rating_counts.get(i, 0) / total_ratings * 100) if total_ratings > 0 else 0
        for i in range(1, 6)
    }
    # Comment
    if request.method == 'POST':
        form1 = form.CommentForm(request.POST)
        if form1.is_valid():
            comment = form1.save(commit=False)
            comment.user = request.user
            comment.course = course
            comment.save()
        elif reply_form.is_valid():
            comment_id = request.POST.get('comment_id')
            if comment_id:
                try:
                    parent_comment = model.Comment.objects.get(id=comment_id)
                except model.Comment.DoesNotExist:
                    messages.error(request, 'نظر مورد نظر یافت نشد.')
                    return redirect('CourseDetails', pk=pk)
                
                reply = reply_form.save(commit=False)
                reply.comment = parent_comment
                reply.user = request.user
                reply.save()
                return redirect('CourseDetails', pk=pk)
            else:
                messages.error(request, 'شناسه نظر معتبر نیست.')
                return redirect('CourseDetails', pk=pk)
    else:
        form1 = form.CommentForm()
        reply_form = form.ReplyCommentForm()
        
    # Reply Comment
        
    
    context = {
        'course': course,
        'coursesyllabus' : syllabus,
        'coursesyllabusname' : syllabusname,
        'syllabus_names': syllabus_names,
        'average_rating': average_rating,
        'form': form1,
        'rating_percentages': rating_percentages,
        'comments' : comments, 
        # 'profile' : profile,
        'reply': reply_form,
        'replys': replys
    }
    return render(request , 'home/course-details.html', context)

   
def show_comments(request, pk):
    course = model.Course.objects.get(pk=pk)
    comments = course.comments.order_by('-created_at')
    replys = model.ReplyComment.objects.filter()
    reply_form = form.ReplyCommentForm(request.POST or None)    

    # Comment
    if request.method == 'POST':
        if reply_form.is_valid():
            comment_id = request.POST.get('comment_id')
            if comment_id:
                try:
                    parent_comment = model.Comment.objects.get(id=comment_id)
                except model.Comment.DoesNotExist:
                    messages.error(request, 'نظر مورد نظر یافت نشد.')
                    return redirect('course_comments', pk=pk)
                
                reply = reply_form.save(commit=False)
                reply.comment = parent_comment
                reply.user = request.user
                reply.save()
                return redirect('course_comments', pk=pk)
            else:
                messages.error(request, 'شناسه نظر معتبر نیست.')
                return redirect('course_comments', pk=pk)
    else:
        form1 = form.CommentForm()
        reply_form = form.ReplyCommentForm()
        
    # Reply Comment
    
    paginator = Paginator(comments, 18)
    
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)  
    
    context = {
        'course': course,
        'comments': comments,
        'page_obj' : page_obj,
        'reply': reply_form,
        'replys': replys
    }
    
    return render(request, "home/show_comments.html", context)

# Areze ha
def handle_request(request, form_class, template_name, success_message, view_name):
    if request.method == 'POST':
        form = form_class(request.POST)
        if form.is_valid():
            # Save the form but don't commit yet
            instance = form.save(commit=False)
            # Set the view name in the model instance
            instance.saved_from_view = view_name
            # Now save the model instance
            instance.save()
            messages.success(request, success_message)
            return redirect('home')
    else:
        form = form_class()
    
    return render(request, template_name, {'form': form})

def arezeyabi(request, pk='arezeyabi'):
    return handle_request(
        request,
        ArezeForm,
        'areze/arezeyabi.html',
        'درخواست عارضه یابی شما ثبت شد',
        'arezeyabi'  # Pass the view name
    )

def arzeshgozari(request, pk='arzeshgozari'):
    return handle_request(
        request,
        ArezeForm,
        'areze/arezeyabi.html',
        'درخواست ارزش‌گذاری شما ثبت شد',
        'arzeshgozari'  # Pass the view name
    )

def emkansanji(request, pk='emkansanji'):
    return handle_request(
        request,
        ArezeForm,
        'areze/arezeyabi.html',
        'درخواست امکان‌سنجی شما ثبت شد',
        'emkansanji'  # Pass the view name
    )

def tejarisazi(request, pk='tejarisazi'):
    return handle_request(
        request,
        ArezeForm,
        'areze/arezeyabi.html',
        'درخواست تجاری‌سازی شما ثبت شد',
        'tejarisazi'  # Pass the view name
    )


def course_search(request):
    csf = CourseSearchForm()
    matching_courses = model.Course.objects.all()  # Default queryset

    # Check if the search term is in GET or POST
    if 'text' in request.GET:
        text = request.GET.get('text')
        csf = CourseSearchForm({'text': text})  # Prepopulate the form
        matching_courses = model.Course.objects.filter(title__icontains=text)
    elif request.method == 'POST':
        csf = CourseSearchForm(request.POST)
        if csf.is_valid():
            text = csf.cleaned_data['text']
            matching_courses = model.Course.objects.filter(title__icontains=text)

    # Handle ordering
    order = request.GET.get('order')
    if order == 'high_to_low':
        matching_courses = sorted(matching_courses, key=lambda course: course.average_rating(), reverse=True)
    elif order == 'low_to_high':
        matching_courses = sorted(matching_courses, key=lambda course: course.average_rating())
    elif order == 'latest':
        matching_courses = matching_courses.order_by('-created_at')

    # Pagination
    paginator = Paginator(matching_courses, 18)  # Adjust number per page
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    context = {
        'order': order,
        'page_obj': page_obj,
        'csf': csf,
        'courses': matching_courses,  # Only for debugging, might not be needed
    }

    return render(request, 'home/course_search.html', context)

def notsigend(request):
    return render(request,'home/notsigned.html')