from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

# Create your views here.

def members(request):
   
    return HttpResponse("my first use of django")
    


def myfirst(request):
    template = loader.get_template("myfirst.html")
    return HttpResponse(template.render())

from django.http import JsonResponse

def get_products(request):
    products = {
        "name": "Laptop",
        "price": 1500,
        "category": "Electronics"
    }

    return JsonResponse(products)

