import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'LearnStream.settings')
django.setup()

from django.contrib.auth.models import User

if not User.objects.filter(username='admin').exists():
    User.objects.create_superuser('Vallrack', 'vallrack67@gmail.com', 'admin123')
    print("¡Superusuario creado con éxito en la nube!")
else:
    print("El superusuario ya existe.")