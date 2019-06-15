from django.http import HttpResponse
from django.template.loader import get_template
from django.template import Template, Context

def index(request):
    t = get_template('main.html')
    c = {'user': 'Eva Maria'}
    html = t.render(c)
    return HttpResponse(html)


def mi_funcion(request):
	html = "Hola! Mi primera UrL!!"
	return HttpResponse(html)

def mi_producto(request, param):
	numero = int(param)
	html = "Acceso a producto: %i" % numero;
	return HttpResponse(html)
