# Generated by Django 4.1.2 on 2022-10-17 12:17

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('contracts', '0007_alter_easy_owner'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Tsty',
        ),
        migrations.AlterField(
            model_name='contract',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='contracts', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='easy',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='easys', to=settings.AUTH_USER_MODEL),
        ),
    ]
