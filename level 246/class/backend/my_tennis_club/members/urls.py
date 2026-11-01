from django.urls import path, include
from .views import *

urlpatterns = [
    path("members/", members, name="members"),
    path("api/products/", get_products, name="get_products"),
]