# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2019-05-28 09:48
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Pulseras',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.CharField(max_length=200)),
                ('name', models.CharField(max_length=200)),
                ('stock', models.IntegerField()),
                ('price', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='Pendientes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.CharField(max_length=200)),
                ('name', models.CharField(max_length=200)),
                ('stock', models.IntegerField()),
                ('price', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='Otros',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.CharField(max_length=200)),
                ('name', models.CharField(max_length=200)),
                ('stock', models.IntegerField()),
                ('price', models.FloatField()),
            ],
        ),
    ]
