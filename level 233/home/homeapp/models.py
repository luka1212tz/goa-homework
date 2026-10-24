from django.db import models


class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()


class Score(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    score = models.IntegerField()


class Group(models.Model):
    name = models.CharField(max_length=100)


class Leader(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    position = models.IntegerField()


class Project(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()