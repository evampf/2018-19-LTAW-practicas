# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse

from mi_tienda.models import Product
from mi_tienda.models import Pulseras
from mi_tienda.models import Pendientes
from mi_tienda.models import Otros

# Create your views here.
def home_view (request):
    return render(request,"index.html", {})

def list(request):
    objects = Product.objects.all()
    html = "<p>Listado de articulos</p>"
    for elt in objects:
        print(elt.name)
        html += '<p>'+ elt.name + ' ' + str(elt.price) + '<p>'
    return HttpResponse(html)


def pulseras_view(request):
    pulseras = Pulseras.objects.all()
    return render(request,"pulseras.html", {'products': pulseras})

def pendientes_view(request):
    pendientes = Pendientes.objects.all()
    return render(request,"pendientes.html", {'products': pendientes})

def otros_view(request):
    otros = Otros.objects.all()
    return render(request,"otros.html", {'products': otros})
