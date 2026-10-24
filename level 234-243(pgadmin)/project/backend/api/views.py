from django.http import JsonResponse
from .models import User, Category


def user_data(user):
    return {
        'id': user.id,
        'name': user.name,
        'email': user.email,
        'age': user.age,
        'category': user.category.name,
    }


def users(request):
    all_users = User.objects.select_related('category').all().order_by('id')
    return JsonResponse([user_data(user) for user in all_users], safe=False)


def user_detail(request, user_id):
    user = User.objects.select_related('category').filter(id=user_id).first()
    if user is None:
        return JsonResponse({'error': 'User not found'}, status=404)
    return JsonResponse(user_data(user))


def categories(request):
    result = []
    for category in Category.objects.prefetch_related('users').all().order_by('id'):
        result.append({
            'id': category.id,
            'name': category.name,
            'users': [user_data(user) for user in category.users.all()],
        })
    return JsonResponse(result, safe=False)
