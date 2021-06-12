from django.urls import path

from sales.views import listorders, listcustomers, listBooks

urlpatterns = [
    path('orders/', listorders),
    path('customers/', listcustomers),
    path('books/', listBooks),
]