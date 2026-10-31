import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'my_tennis_club.settings')

application = get_wsgi_application()

# Vercel looks for `app`
app = application