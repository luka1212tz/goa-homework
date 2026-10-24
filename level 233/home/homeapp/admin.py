from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import User, Score, Group, Leader, Project

admin.site.register(User)
admin.site.register(Score)
admin.site.register(Group)
admin.site.register(Leader)
admin.site.register(Project)