from django.urls import path
from . import views

urlpatterns = [
    path("/categories", views.categories_view, name="categories"),
]