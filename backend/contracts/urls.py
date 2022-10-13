from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name="api-overview"),
    path('contract-list/', views.contractList, name="contract-list"),
    path('contract-detail/<str:pk>/', views.contractDetail, name="contract-detail"),
    path('contract-create/', views.contractCreate, name="contract-create"),
    path('contract-update/<str:pk>/', views.contractUpdate, name="contract-update"),
    path('contract-delete/<str:pk>/', views.contractDelete, name="contract-delete"),
]