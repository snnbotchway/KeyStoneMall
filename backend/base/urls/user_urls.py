from ..views import user_views as views
from ..views.user_views import MyTokenObtainPairView

from django.urls import path

urlpatterns = [
    path('', views.getUsers, name='getUsers'),
    path('login/', MyTokenObtainPairView.as_view(), name='login'),
    path('register/', views.register, name='register'),
    path('profile/', views.getProfile, name='profile'),
    path('profile/update/', views.updateProfile, name='update-profile'),
]