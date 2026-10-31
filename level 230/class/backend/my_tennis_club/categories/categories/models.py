
from django.db import models

# Create your models here.
class categories(models.Model):
    category_id = models.CharField(max_length=255)
    category_name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.category_name}, {self.category_id},{self.description}"