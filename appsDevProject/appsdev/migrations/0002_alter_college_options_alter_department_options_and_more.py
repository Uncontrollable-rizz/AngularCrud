# Generated by Django 5.0.2 on 2024-04-04 01:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('appsdev', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='college',
            options={'managed': False},
        ),
        migrations.AlterModelOptions(
            name='department',
            options={'managed': False},
        ),
        migrations.AlterModelOptions(
            name='program',
            options={'managed': False},
        ),
        migrations.AlterModelOptions(
            name='student',
            options={'managed': False},
        ),
    ]