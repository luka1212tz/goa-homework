from django.http import HttpResponse


def home(request):
    if request.method == "GET":
        return HttpResponse("GET მეთოდი მუშაობს!")

    elif request.method == "POST":
        return HttpResponse("POST მეთოდი მუშაობს!")

    elif request.method == "PUT":
        return HttpResponse("PUT მეთოდი მუშაობს!")

    elif request.method == "DELETE":
        return HttpResponse("DELETE მეთოდი მუშაობს!")

    return HttpResponse("ეს მეთოდი არ გვაქვს.")