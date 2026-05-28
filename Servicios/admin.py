from django.contrib import admin
from .models import Servicio

class ServicioAdmin(admin.ModelAdmin):
    list_display = ("id","titulo","contenido","imagen","creado")
    list_filter = ("titulo",)
    search_fields = ("titulo", "creado")
    readonly_fields = ("id", "creado")

admin.site.register(Servicio, ServicioAdmin)
