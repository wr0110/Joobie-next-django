from django.urls import path
from . import views

urlpatterns = [
    path('contracts/', views.getAllContracts, name='contracts'),
    path('contracts/new/', views.newContract, name='new_contract'),
    path('contracts/<str:pk>/', views.getContract, name='contract'),
    path('contracts/<str:pk>/update/', views.updateContract, name='update_contract'),
    path('contracts/<str:pk>/delete/', views.deleteContract, name='delete_contract')
]