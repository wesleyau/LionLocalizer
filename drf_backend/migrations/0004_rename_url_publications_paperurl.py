# Generated by Django 3.2.3 on 2021-05-29 23:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('drf_backend', '0003_auto_20210526_0111'),
    ]

    operations = [
        migrations.RenameField(
            model_name='publications',
            old_name='url',
            new_name='paperurl',
        ),
    ]