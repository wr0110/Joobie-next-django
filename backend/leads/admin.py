from django.contrib import admin

# Register your models here.
from .models import Lead

# Register your models here.
class LeadAdmin(admin.ModelAdmin):
    pass
admin.site.register(Lead, LeadAdmin)