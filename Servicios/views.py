from django.shortcuts import render
from Servicios.models import Servicio
# Create your views here.

# Vista Servicios
def servicios(request):
    # Traemos los registros de la base de datos dentro de la función
    servicios_list = Servicio.objects.all()
    return render(request, "servicios/servicios.html", {"servicios": servicios_list})
