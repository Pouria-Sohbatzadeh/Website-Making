from django.core.exceptions import ValidationError
from django_resized import ResizedImageField
from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator
from django.utils import timezone
from PIL import Image

def validate_image_size(image):
    img = Image.open(image)
    width, height = img.size
    if width < 1280 and height < 720:
        raise ValidationError(f"تصویر باید بیشتر از 1280*720 باشد . {width}{height}")
    
class Teacher(models.Model):
    name = models.CharField(max_length=150)
    description = models.CharField(max_length=150)
    rate = models.IntegerField(default=2)
    role = models.CharField(max_length=150)
    image = ResizedImageField(upload_to='images/Teacher', size=[120, 120], quality=75)

    def __str__(self):
        return self.name

class Course(models.Model):
    class Certificate(models.TextChoices):
        YES = 'Y', 'YES'
        NO = 'N', 'NO'

    title = models.CharField(max_length=255)
    price = models.IntegerField(default=0)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    course_capacity = models.IntegerField(default=5)
    certificate = models.CharField(max_length=1, choices=Certificate.choices)
    image_course = models.ImageField(upload_to="images/Course")
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)  # زمان ایجاد
    updated_at = models.DateTimeField(auto_now=True)  # زمان آخرین بروزرسانی


    def __str__(self):
        return self.title
    
    def average_rating(self):
        ratings = self.comments.aggregate(models.Avg('rating'))
        return ratings['rating__avg'] or 0
    
    def save(self, *args, **kwargs):
        validate_image_size(self.image_course)
        super(Course, self).save(*args, **kwargs)

class CourseSyllabus(models.Model):
    course = models.OneToOneField(Course, on_delete=models.CASCADE, related_name='coursesyllabus')
    time_period = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return f"{self.course.title} Syllabus"

class CourseSyllabusName(models.Model):
    coursesyllabus = models.ForeignKey(CourseSyllabus, on_delete=models.CASCADE, related_name='syllabus_names')
    crs = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='crs', default=1)
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title


# Model Areze ---------------------------    
class Areze(models.Model):
    name_organ = models.CharField(max_length=255)
    location_organ = models.CharField(max_length=255)
    activity_type = models.CharField(max_length=255)
    num_personnel = models.IntegerField()
    num_workshifts = models.IntegerField()
    name_response = models.CharField(max_length=155)
    phone_response = models.CharField(max_length=20)
    saved_from_view = models.CharField(max_length=100, blank=True, null=True)  # New field to store view name
    def __str__(self):
        return f"{self.id}, {self.name_organ}, {self.saved_from_view}"



# Model Comment

class Comment(models.Model):
    course = models.ForeignKey(Course, related_name='comments', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='userprofile')
    content = models.TextField()
    rating = models.IntegerField(default=0)  # امتیاز از 1 تا 5
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Comment by {self.user.username} on {self.course.title}"
    
class ReplyComment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE,related_name='replycomment')
    reply = models.TextField(default=None)