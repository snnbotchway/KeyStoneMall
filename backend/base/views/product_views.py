from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination

from ..models import Product
from ..serializers import ProductSerializer

@api_view(['GET'])
def getProducts(request):
    # paginator = PageNumberPagination()
    # paginator.page_size = 5
    # contacts = Product.objects.all()
    # result_page = paginator.paginate_queryset(contacts, request)
    # serializer = ProductSerializer(result_page, many=True)
    # return paginator.get_paginated_response(serializer.data)
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def productDetail(request, pk):
    product = Product.objects.get(_id = pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)
