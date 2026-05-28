from django.urls import path
from . import views 

from django.conf import settings
from django.conf.urls.static import static

#hacer el enrutamiento

urlpatterns =[
    path('servicios', views.servicios, name="Servicios"),
]