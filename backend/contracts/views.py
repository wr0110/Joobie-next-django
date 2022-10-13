from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Contract
from .serializers import ContractSerializer

# Create your views here.

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List':'/contract-list',
        'Detail View':'task-detail/<str:pk>/',
        'Create':'/contract-create/',
        'Update':'/contract-update/<str:pk>/',
        'Delete':'/contract-delete/<str:pk>/',
    }

    return Response(api_urls)

@api_view(['GET'])
def contractList(request):
    contracts = Contract.objects.all()
    serializer = ContractSerializer(contracts, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def contractDetail(request, pk):
    contracts = Contract.objects.get(id=pk)
    serializer = ContractSerializer(contracts, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def contractCreate(request):
    serializer = ContractSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def contractUpdate(request, pk):
    contract = Contract.objects.get(id=pk)
    serializer = ContractSerializer(instance=contract, data=request.data)

    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)

@api_view(['DELETE'])
def contractDelete(request, pk):
    contract = Contract.objects.get(id=pk)
    contract.delete()
        
    return Response('Contract successfully deleted')