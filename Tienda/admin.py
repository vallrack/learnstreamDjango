from django.contrib import admin
from .models import CategoriaProd, Producto
# Register your models here.

class CategoriaProdAdmin(admin.ModelAdmin):
    list_display = ("nombreC", "creado", "actualizado")
    readonly_fields = ("creado", "actualizado")
    list_filter = ("nombreC",)
    search_fields = ("nombreC",)

class ProductoAdmin(admin.ModelAdmin):
        list_display = ("nombreP", "imagenP", "descripcion", "precio", "disponibilidad", "creado", "actualizado")
        readonly_fields = ("creado", "actualizado")
        list_filter = ("nombreP", "precio")
        search_fields = ("nombreP", "precio")

admin.site.register(CategoriaProd, CategoriaProdAdmin)
admin.site.register(Producto, ProductoAdmin)
