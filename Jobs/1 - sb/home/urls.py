from django.urls import path 
from .views import *

appname = "home"
urlpatterns = [
    path('', index , name='home'),
    path('courses/', Courses , name = "Courses" ),
    path('courses/courses-details/<int:pk>/', CourseDetails, name='CourseDetails'),
    path('arezeyabi/', arezeyabi , name='areze'),
    path('arzeshgozari/', arzeshgozari , name='arzesh'),
    path('tejarisazi/', tejarisazi , name='tejari'),
    path('emkansanji/', emkansanji , name='emkan'),
    path('search/', course_search, name='course_search'),
    path('notsigned/',notsigend,name='notsigned'),
    path('courses/courses-details/<int:pk>/comments/', show_comments, name='course_comments'),
]