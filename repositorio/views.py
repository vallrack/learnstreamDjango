from django.shortcuts import render


# Vista Home
def home(request):
    return render(request, "repositorio/home.html")

# Vista Blog
def blog(request):
    return render(request, "repositorio/blog.html")

# Vista Contacto
def contacto(request):
    return render(request, "repositorio/contacto.html")
