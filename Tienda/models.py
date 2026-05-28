from django.db import models

# Create your models here.
class CategoriaProd(models.Model):
    #atributos
    nombreC = models.CharField(max_length=50)
    creado = models.DateTimeField(auto_now_add=True)
    actualizado = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "categoriaProd"
        verbose_name_plural = "categoriasProd"

    def __str__(self):
        return self.nombreC
    
class Producto(models.Model):
    nombreP = models.CharField(max_length=50)
    imagenP = models.ImageField(upload_to='tienda', null=True, blank=True)
    descripcion = models.TextField()
    precio = models.FloatField()
    disponibilidad = models.BooleanField(default=True)
    creado = models.DateTimeField(auto_now_add=True)
    actualizado = models.DateTimeField(auto_now_add=True)
    #cómo se hace una relación entre tablas en DJango
    categorias = models.ForeignKey(CategoriaProd, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "producto"
        verbose_name_plural = "productos"

    def __str__(self):
        return self.nombreP
    
