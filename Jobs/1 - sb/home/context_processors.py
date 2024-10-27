from . import forms
from authentication.forms import *
from django.contrib import messages
def search_form(request):
    return {'csf': CourseSearchForm()}
def mess(request):
    return {'messages':messages}

