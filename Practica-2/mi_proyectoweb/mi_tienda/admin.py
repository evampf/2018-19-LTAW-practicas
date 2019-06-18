from django.contrib import admin

#Import models
from mi_tienda.models import pulseras
from mi_tienda.models import pendientes
from mi_tienda.models import otros

# Register your models here.
admin.site.register(pulseras)
admin.site.register(pendientes)
admin.site.register(otros)
