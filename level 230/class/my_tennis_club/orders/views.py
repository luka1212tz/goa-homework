from django.http.response import JsonResponse

from .models import Orders


# from django.template import loader
# Create your views here.
def orders(request):
    all_orders = list(Orders.objects.values())

    return JsonResponse(all_orders, safe=False)