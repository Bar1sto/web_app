from django.urls import path
from . import views

urlpatterns = [
   path('', views.main),
   path('price', views.price),
   path('about', views.about),
]
