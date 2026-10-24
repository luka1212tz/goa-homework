from django.core.management.base import BaseCommand
from api.models import Category, User

class Command(BaseCommand):
    help = 'Add simple example users and categories'

    def handle(self, *args, **kwargs):
        if User.objects.exists():
            self.stdout.write('Users already exist; skipped sample data.')
            return
        students, _ = Category.objects.get_or_create(name='Students')
        teachers, _ = Category.objects.get_or_create(name='Teachers')
        developers, _ = Category.objects.get_or_create(name='Developers')
        for name, email, age, category in [
            ('Luka', 'luka@example.com', 15, students),
            ('Nino', 'nino@example.com', 21, teachers),
            ('Giorgi', 'giorgi@example.com', 19, developers),
            ('Mariam', 'mariam@example.com', 17, students),
        ]:
            User.objects.create(name=name, email=email, age=age, category=category)
        self.stdout.write(self.style.SUCCESS('Example data added!'))
