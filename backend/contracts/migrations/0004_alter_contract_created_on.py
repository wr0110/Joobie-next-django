# Generated by Django 4.1.2 on 2022-10-13 21:03

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contracts', '0003_remove_contract_date_created_contract_created_on'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contract',
            name='created_on',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
    ]