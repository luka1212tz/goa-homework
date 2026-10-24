from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    age = models.IntegerField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='users')

    def __str__(self):
        return self.name
