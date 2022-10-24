from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from datetime import datetime
from django.contrib.auth.models import User

NETWORK_CHOICES = (
    ('ethmain','Ethereum (ETH)'),
    ('goerli','Goerli (GOR)'),
)

# Create your models here.
class Contract(models.Model):
    owner = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        null=True
    )
    network = models.CharField(max_length=7, choices=NETWORK_CHOICES, default='goerli')
    name = models.CharField(max_length=30)
    symbol = models.CharField(max_length=8)
    second_mint_price = models.DecimalField(max_digits=10, decimal_places=9)
    supply = models.IntegerField(
        validators=[
            MaxValueValidator(99999),
            MinValueValidator(1)
        ]
    )
    royalty_rate = models.DecimalField(max_digits=4, decimal_places=2)
    whitelist = models.BooleanField()
    created_on = models.DateTimeField(default=datetime.now)
