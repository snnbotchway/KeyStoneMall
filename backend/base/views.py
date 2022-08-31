from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination

from .models import *
from .serializers import *

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
    # paginator = PageNumberPagination()
    # paginator.page_size = 5
    # contacts = Product.objects.all()
    # result_page = paginator.paginate_queryset(contacts, request)
    # serializer = ProductSerializer(result_page, many=True)
    # return paginator.get_paginated_response(serializer.data)
    product = Product.objects.all()
    serializer = ProductSerializer(product, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def productDetail(request, pk):
    product = Product.objects.get(_id = pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)
