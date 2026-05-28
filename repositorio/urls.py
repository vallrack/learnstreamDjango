from . import views
from django.urls import path 
from django.conf import settings
from django.conf.urls.static import static

#Importamos la aplicación y su vista

#usamos el URLPATTERNS=[]
urlpatterns = [
    path ('', views.home, name="Home"),
    path('blog', views.blog, name="Blog"),
    path('contacto', views.contacto, name="Contacto"),
]

#Configuración para la media
urlpatterns += static(settings.MEDIA_URL, document_root =settings.MEDIA_ROOT)