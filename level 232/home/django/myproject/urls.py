from django.urls import path
from homeapp.views import home

urlpatterns = [
    path("", home),
]