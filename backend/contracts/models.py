from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.conf import settings

NETWORK_CHOICES = (
    ('ethmain','Ethereum (ETH)'),
    ('goerli','Goerli (GOR)'),
)

# Create your models here.
class Contract(models.Model):
    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
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