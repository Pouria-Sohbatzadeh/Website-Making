from django.db import models
from django.contrib.auth.models import User       
from home.models import Course

# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    courses = models.ManyToManyField(Course, blank=True)  # Correct reference to Course model
    bio = models.TextField(blank=True, null=True)
    avatar = models.ImageField(upload_to='avatars/', default='avatars/default.png')

    def __str__(self):
        return self.user.username

# # Comment model

# class Comment(models.Model):
#     course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='comments')
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     content = models.TextField()
#     created_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return f"Comment by {self.user.username} on {self.course.title}"