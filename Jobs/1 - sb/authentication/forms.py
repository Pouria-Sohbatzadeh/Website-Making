from django import forms
from . import models

class SignUpForm(forms.Form):
    email = forms.EmailField(label="ایمیل",widget=forms.TextInput(attrs={"class":"form-control",'placeholder':'لطفا ایمیل خود را وارد کنید'}),
                            error_messages={
            'required': 'باید ایمیل را وارد کنید',
            'invalid':'ایمیل اشتباه است'
        }
    )
    username = forms.CharField(label="نام کاربری",max_length=20,widget=forms.TextInput(attrs={"class":"form-control",'placeholder':'لطفا نام کاربر خود را وارد کنید'}),
                            error_messages={
            'required': 'باید نام کاربری را وارد کنید',
            'max_length': 'The name must be less than 100 characters.',
        }
    )
    password = forms.CharField(label="رمز عبور",widget=forms.TextInput(attrs={"class":"form-control",'placeholder':'لطفا رمز ورود خود را وارد کنید'}),
                            error_messages={
            'required': 'لطفا رمز ورود مورد نزر خود را وارد کنید',
            'max_length': 'The name must be less than 100 characters.',
        }
    )

    password1 = forms.CharField(label="تکرار رمز عبور",widget=forms.TextInput(attrs={"class":"form-control",'placeholder':'لطفا رمز ورود خود را وارد کنید'}),
                            error_messages={
            'required': 'لطفا رمز ورود مورد نزر خود را وارد کنید',
            'max_length': 'The name must be less than 100 characters.',
        }
    )

class SignInForm(forms.Form):
    username = forms.CharField(label="نام کاربری",max_length=60,widget=forms.TextInput(attrs={"class":"form-control",'placeholder':'لطفا نام کاربر خود را وارد کنید'}),
                            error_messages={
            'required': 'باید نام کاربری را وارد کنید',
            'max_length': 'The name must be less than 100 characters.',
        }
    )
    password = forms.CharField(label="رمز عبور",widget=forms.TextInput(attrs={"class":"form-control",'placeholder':'لطفا رمز ورود خود را وارد کنید'}),
                            error_messages={
            'required': 'لطفا رمز ورود مورد نظر خود را وارد کنید',
            'max_length': 'The name must be less than 100 characters.',
        }
    )
    

# class CommentForm(forms.ModelForm):
#     class Meta:
#         model = models.Comment
#         fields = ['content']
#         widgets = {
#             'content': forms.Textarea(attrs={'class': 'form-control', 'rows': 3}),
#         }


class ProfileUpdateForm(forms.ModelForm):
    class Meta:
        model = models.Profile
        fields = ['avatar']
        widgets = {
            'avatar': forms.ClearableFileInput(attrs={'multiple': False, 'class': 'profile'}),
        }
        
        
class CourseSearchForm(forms.Form):
    text = forms.CharField(max_length=30,widget=forms.TextInput(attrs={'type':'text','class':'edublink-search-popup-field','placeholder':'جستجو...'}))

# Delete account form

