# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Product (models.Model):
    name = models.CharField(max_length=200)
    stock = models.IntegerField()
    price = models.FloatField()

    def __str__(self):
        return self.name

# Create your models here.
class Pulseras (models.Model):
    image = models.ImageField(upload_to='static', default=0)
    nombre = models.CharField(max_length=200)
    stock = models.IntegerField()
    precio = models.FloatField()

    def __str__(self):
        return self.name

class Pendientes (models.Model):
    image = models.ImageField(upload_to='static', default=0)
    nombre = models.CharField(max_length=200)
    stock = models.IntegerField()
    precio = models.FloatField()

    def __str__(self):
        return self.name

class Otros (models.Model):
    image = models.ImageField(upload_to='static', default=0)
    nombre = models.CharField(max_length=200)
    stock = models.IntegerField()
    precio = models.FloatField()

    def __str__(self):
        return self.name
