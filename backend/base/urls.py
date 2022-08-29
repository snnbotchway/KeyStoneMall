from . import views
from django.urls import path

app_name= 'base'

urlpatterns = [
    path('products/', views.getProducts, name='getProducts'),
    path('', views.getRoutes, name='getRoutes'),
    # path('products/create/', views.productCreate, name='productCreate'),
    # path('products/upload/', views.productUpload, name='productUpload'),
    # path('products/<int:pk>/reviews/', views.productReview, name='productDetail'),
    # path('products/top/', views.topProducts, name='topProducts'),
    path('products/<str:pk>/', views.productDetail, name='productDetail'),
    # path('products/delete/<int:pk>', views.productDelete, name='productDelete'),
    # path('products/update/<int:pk>', views.productUpdate, name='productUpdate'),
]