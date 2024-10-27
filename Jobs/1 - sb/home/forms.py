# forms.py
from django import forms
from . import models
from django import forms
from .models import Comment,ReplyComment
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm


class ArezeForm(forms.ModelForm):
    name_organ = forms.CharField(label='نام شرکت/سازمان', max_length=255)
    location_organ = forms.CharField(label='مکان شرکت/سازمان', max_length=255)
    activity_type = forms.CharField(label='زمینه فعالیت', max_length=255)
    num_personnel = forms.IntegerField(label='تعداد پرسنل')
    num_workshifts = forms.IntegerField(label='تعداد شیفت کاری')
    name_response = forms.CharField(label='نام پاسخگو', max_length=155)
    phone_response = forms.CharField(label='شماره تلفن پاسخگو', max_length=20)

    class Meta:
        model = models.Areze
        fields = ['name_organ', 'location_organ', 'activity_type', 'num_personnel', 'num_workshifts', 'name_response', 'phone_response']


class SignUpForm(UserCreationForm):
    username = forms.CharField(label='نام کاربری',max_length=50,widget=forms.TextInput(attrs={'id':'d-rtl' ,'placeholder' : 'enter your email'}))
    email = forms.EmailField(label='',max_length=50,widget=forms.TextInput(attrs={'id':'reg-name' ,' placeholder' : 'نام کاربری خود را وارد کنید'}))
    password1 = forms.CharField(label='',max_length=50,widget=forms.PasswordInput(attrs={'name': 'password','type' :'password', 'placeholder' : 'enter your password'}))
    password2 = forms.CharField(label='',max_length=50,widget=forms.PasswordInput(attrs={'name': 'password','type' :'password', 'placeholder' : 'enter your password again'}))
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']


class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ['content', 'rating']
        widgets = {
            'content': forms.Textarea(attrs={'rows': 3, 'cols': 40}),
            'rating': forms.RadioSelect(choices=[(i, str(i)) for i in range(1, 6)]),
            
        }

class ReplyCommentForm(forms.ModelForm):
    class Meta:
        model = ReplyComment
        fields = ['reply']
        widgets = {
            'reply': forms.Textarea(attrs={'rows': 3, 'cols': 40}),
        }