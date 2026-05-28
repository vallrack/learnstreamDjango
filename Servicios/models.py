from django.db import models
from tabnanny import verbose #Permite poner alias
from tkinter import image_names #Permite trabajar con imagenes 
# Create your models here.

class Servicio(models.Model):
    #Atributos
    titulo = models.CharField(max_length=50)
    contenido = models.TextField()
    imagen = models.ImageField(upload_to='servicios')
    creado = models.DateTimeField(auto_now_add=True)
    actualizacion = models.DateTimeField(auto_now=True)

    #Crear una metaclase o alias para encontrar este objeto con cualquier otra forma
    class Meta:
        verbose_name = 'servicio'
        verbose_name_plural = 'servicios'

        #Devolver toda la información como un objeto de texto 
        def __str__(self):
            return self.titulo 