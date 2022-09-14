from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    _id = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['_id', 'email', 'first_name', 'last_name', 'is_staff' ]
    def get__id(self, obj):
        return obj.id
    

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['_id', 'email', 'first_name', 'last_name', 'token' ]
    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

