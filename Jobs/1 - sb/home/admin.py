from django.contrib import admin
from .models import *


admin.site.register(Areze)
admin.site.register(Comment)

@admin.register(Teacher)
class TeacherAdmin(admin.ModelAdmin):
    list_display  = ['name' , 'role' , 'rate' ,]
    ordering = ['name']


class CourseSyllabusNameInline(admin.TabularInline):
    model = CourseSyllabusName
    extra = 1

class CourseSyllabusInline(admin.StackedInline):
    model = CourseSyllabus
    extra = 1

    # اضافه کردن CourseSyllabusNameInline به CourseSyllabusInline
    inlines = [CourseSyllabusNameInline]

    def get_inline_instances(self, request, obj=None):
        inline_instances = super().get_inline_instances(request, obj)
        if obj is not None:
            return inline_instances + [CourseSyllabusNameInline(self.model, self.admin_site)]
        return inline_instances

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    inlines = [CourseSyllabusInline]

# اگر می‌خواهید در صفحات CourseSyllabus و CourseSyllabusName مدیریت‌های اضافی داشته باشید:
@admin.register(CourseSyllabus)
class CourseSyllabusAdmin(admin.ModelAdmin):
    inlines = [CourseSyllabusNameInline]

@admin.register(CourseSyllabusName)
class CourseSyllabusNameAdmin(admin.ModelAdmin):
    pass

@admin.register(ReplyComment)
class ReplyAdmin(admin.ModelAdmin):
    list_display  = ['reply' ]
    ordering = ['reply']