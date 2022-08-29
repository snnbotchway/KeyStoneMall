from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .products import products

@api_view(['GET'])
def getRoutes(request):
    routes=[
        '/api/',
        '/api/products/',
        '/api/product/<int:pk>',
        '/api/products/create/',
        '/api/products/upload/',
        '/api/products/<int:pk>/reviews/',
        '/api/products/top/',
        '/api/products/<int:pk>',
        '/api/products/delete/<int:pk>/',
        '/api/products/update/<int:pk>/',
    ]
    return Response(routes)

@api_view(['GET'])
def getProducts(request):
    return Response(products)

@api_view(['GET'])
def productDetail(request, pk):
    _product = None 
    for product in products:
        if product['_id'] == pk:
            _product = product
            break
    return Response(_product)
