# Generated by Django 4.1.2 on 2022-11-01 14:44

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('contracts', '0012_contract_created_on'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contract',
            name='created_on',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]