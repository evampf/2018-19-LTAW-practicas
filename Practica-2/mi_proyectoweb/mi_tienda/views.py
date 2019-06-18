# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse

from mi_tienda.models import pulseras
from mi_tienda.models import pendientes
from mi_tienda.models import otros

# Create your views here.
def home_view (request):
    return render(request, "index.html", {'user':'client'})

def pulseras_view(request):
    pulseras = pulseras.objects.all()
    return render(request,"pulseras.html", {'products': pulseras})

def pendientes_view(request):
    pendientes = pendientes.objects.all()
    return render(request,"pendientes.html", {'products': pendientes})

def otros_view(request):
    otros = otros.objects.all()
    return render(request,"otros.html", {'products': otros})
