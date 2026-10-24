from django.urls import path
from api import views

urlpatterns = [
    path('api/users/', views.users),
    path('api/users/<int:user_id>/', views.user_detail),
    path('api/categories/', views.categories),
]
