from django.shortcuts import render
from .models import categories

def categories_view(request):
    all_categories = categories.objects.all()

    return render(request, "categories.html", {
        "categories": all_categories
    })