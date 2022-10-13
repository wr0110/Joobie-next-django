from django.contrib import admin

# Register your models here.
from .models import Contract

# Register your models here.
class ContractAdmin(admin.ModelAdmin):
    pass
admin.site.register(Contract, ContractAdmin)