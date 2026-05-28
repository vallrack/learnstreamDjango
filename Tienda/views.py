from django.shortcuts import render
from Tienda.models import *

# Create your views here.
# Vista Tienda
def tienda(request):
    tiendas = Producto.objects.all()
    return render(request, "tienda/tienda.html", {"tiendas": tiendas})