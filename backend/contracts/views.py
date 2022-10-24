from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Avg, Min, Max, Count

from .serializers import ContractSerializer
from .models import Contract

from django.shortcuts import get_object_or_404

# Create your views here.

@api_view(['GET'])
def getAllContracts(request):

    contracts = Contract.objects.all()

    serializer = ContractSerializer(contracts, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getContract(request, pk):
    contract = get_object_or_404(Contract, id=pk)

    serializer = ContractSerializer(contract, many=False)

    return Response(serializer.data)


@api_view(['POST'])
def newContract(request):
    data = request.data

    contract = Contract.objects.create(**data)

    serializer = ContractSerializer(contract, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
def updateContract(request, pk):
    contract = get_object_or_404(Contract, id=pk)

    contract.owner = request.data['owner']
    contract.network = request.data['network']
    contract.name = request.data['name']
    contract.symbol = request.data['symbol']
    contract.second_mint_price = request.data['second_mint_price']
    contract.supply = request.data['supply']
    contract.royalty_rate = request.data['royalty_rate']
    contract.whitelist = request.data['whitelist']
    contract.created_on = request.data['created_on']


    contract.save()

    serializer = ContractSerializer(contract, many=False)

    return Response(serializer.data)


@api_view(['DELETE'])
def deleteContract(request, pk):
    contract = get_object_or_404(Contract, id=pk)

    contract.delete()

    return Response({ 'message': 'Contract is Deleted.' }, status=status.HTTP_200_OK)