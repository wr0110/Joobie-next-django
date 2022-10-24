from dataclasses import fields
from django.contrib.auth.models import User
from rest_framework import serializers


class SignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password')

        extra_kwargs = {
            'username': { 'required': True, 'allow_blank': False },
            'password': { 'required': True, 'allow_blank': False, 'min_length': 6 },
        }

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username',)