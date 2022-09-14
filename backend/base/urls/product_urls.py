from ..views import product_views as views
from django.urls import path

urlpatterns = [
    path('', views.getProducts, name='getProducts'),
    # path('products/create/', views.productCreate, name='productCreate'),
    # path('products/upload/', views.productUpload, name='productUpload'),
    # path('products/<int:pk>/reviews/', views.productReview, name='productDetail'),
    # path('products/top/', views.topProducts, name='topProducts'),
    path('<str:pk>/', views.productDetail, name='productDetail'),
    # path('products/delete/<int:pk>', views.productDelete, name='productDelete'),
    # path('products/update/<int:pk>', views.productUpdate, name='productUpdate'),
]