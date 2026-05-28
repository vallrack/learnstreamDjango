import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'LearnStream.settings')
django.setup()

from django.contrib.auth.models import User

# Configuramos las credenciales en variables idénticas para la validación
usuario_final = 'Vallrack'
correo_final = 'vallrack67@gmail.com'
clave_final = 'admin123'

# Buscamos si el usuario exacto ya existe antes de intentar crearlo
if not User.objects.filter(username=usuario_final).exists():
    User.objects.create_superuser(usuario_final, correo_final, clave_final)
    print(f"¡Superusuario '{usuario_final}' creado con éxito en la nube!")
else:
    print(f"El superusuario '{usuario_final}' ya existe en la base de datos. Saltando paso.")