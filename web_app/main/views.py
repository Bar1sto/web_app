from django.shortcuts import render
from django.http import HttpResponse


def main(request):
    return render(request, 'main/home.html')

def price(request):
    return render(request, 'main/price.html')

def about(request):
    return render(request, 'main/about.html')