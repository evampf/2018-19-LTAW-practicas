# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

#Import models
from mi_tienda.models import Pulseras
from mi_tienda.models import Pendientes
from mi_tienda.models import Otros

# Register your models here.
admin.site.register(Pulseras)
admin.site.register(Pendientes)
admin.site.register(Otros)
