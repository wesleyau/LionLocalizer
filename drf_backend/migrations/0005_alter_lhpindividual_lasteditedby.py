# Generated by Django 3.2.3 on 2021-05-31 00:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('drf_backend', '0004_rename_url_publications_paperurl'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lhpindividual',
            name='lastEditedBy',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
    ]