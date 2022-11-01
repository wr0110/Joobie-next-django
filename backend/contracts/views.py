from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.pagination import PageNumberPagination

from rest_framework.permissions import IsAuthenticated

from .serializers import ContractSerializer
from .models import Contract

from django.shortcuts import get_object_or_404
from .filters import ContractsFilter

# Create your views here.

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getAllContracts(request):

    filterset = ContractsFilter(request.GET, queryset=Contract.objects.filter(owner=request.user).order_by('id'))

    count = filterset.qs.count()

    # Pagination
    resPerPage = 3

    paginator = PageNumberPagination()
    paginator.page_size = resPerPage

    queryset = paginator.paginate_queryset(filterset.qs, request)


    serializer = ContractSerializer(queryset, many=True)
    return Response({
        "count": count,
        "resPerPage": resPerPage,
        'contracts': serializer.data
        })


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getContract(request, pk):
    contract = get_object_or_404(Contract, id=pk)

    if contract.owner != request.user:
        return Response({ 'message': 'You cannot view this contract' }, status=status.HTTP_403_FORBIDDEN)

    serializer = ContractSerializer(contract, many=False)

    return Response(serializer.data)

#check not receiving anonymous users
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def newContract(request):
    request.data['owner'] = request.user
    data = request.data

    contract = Contract.objects.create(**data)

    serializer = ContractSerializer(contract, many=False)
    return Response(serializer.data)


#should only be able to update logo, background color once contract published, not other fields
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateContract(request, pk):
    contract = get_object_or_404(Contract, id=pk)

    if contract.owner != request.user:
        return Response({ 'message': 'You cannot update this contract' }, status=status.HTTP_403_FORBIDDEN)

    contract.network = request.data['network']
    contract.name = request.data['name']
    contract.symbol = request.data['symbol']
    contract.second_mint_price = request.data['second_mint_price']
    contract.supply = request.data['supply']
    contract.royalty_rate = request.data['royalty_rate']
    contract.whitelist = request.data['whitelist']

    contract.save()

    serializer = ContractSerializer(contract, many=False)

    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteContract(request, pk):
    contract = get_object_or_404(Contract, id=pk)

    if contract.owner != request.user:
        return Response({ 'message': 'You cannot delete this contract' }, status=status.HTTP_403_FORBIDDEN)

    contract.delete()

    return Response({ 'message': 'Contract is Deleted.' }, status=status.HTTP_200_OK)