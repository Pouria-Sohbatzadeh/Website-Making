from django.urls import path
from . import views



urlpatterns = [
    path('signup/',views.signup, name= 'signup'),
    path('signin/',views.signin, name= 'signin'),
    path('signout/',views.signout, name= 'signout'),
    path('profile/',views.profile,name= 'profile'),
    path('add-to-profile/', views.add_to_profile, name='add_to_profile'),
    path('profile/delete_course/<int:course_id>/', views.delete_course_from_profile, name='delete_course_from_profile'),
    path('profile/delete_comment/<str:comment_id>/',views.delete_comment_from_profile, name='delete_comment_from_profile'),
    path('courses/courses-details/<int:course_id>/', views.course_detail, name='course_detail'),
    path('',views.delete_acc,name='delete_acc'),
]
