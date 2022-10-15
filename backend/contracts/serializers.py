from rest_framework import serializers
from .models import Contract

class ContractSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Contract
        fields = '__all__'