from dataclasses import field
from django_filters import rest_framework as filters
from .models import Contract


class ContractsFilter(filters.FilterSet):

    keyword = filters.CharFilter(field_name='name', lookup_expr='icontains')

    class Meta:
        model = Contract
        fields = ('keyword', 'network')