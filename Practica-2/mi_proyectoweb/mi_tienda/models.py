# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class pulseras (models.Model):
    image = models.ImageField(upload_to='static', default=0)
    name = models.CharField(max_length=200)
    stock = models.IntegerField()
    price = models.FloatField()

    def __str__(self):
        return self.name
class pendientes (models.Model):
    image = models.ImageField(upload_to='static', default=0)
    name = models.CharField(max_length=200)
    stock = models.IntegerField()
    price = models.FloatField()

    def __str__(self):
        return self.name

class otros (models.Model):
    image = models.ImageField(upload_to='static', default=0)
    name = models.CharField(max_length=200)
    stock = models.IntegerField()
    price = models.FloatField()

    def __str__(self):
        return self.name
