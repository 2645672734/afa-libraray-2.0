from django.db import models
from django.contrib import admin


class Customer(models.Model):

    name = models.CharField(max_length=200)

    phonenumber = models.CharField(max_length=200)

    address = models.CharField(max_length=200)


admin.site.register(Customer)
