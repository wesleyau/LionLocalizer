from django.db import models

# Create your models here.
class Sequences(models.Model):
    id = models.CharField(max_length=10, primary_key=True)
    cytB = models.TextField() #or CharField()
    #sequence2 = models.TextField()
    dateTimeModified = models.DateTimeField(auto_now=True)
    lastEditedBy = models.CharField(max_length=30,null=True, blank=True)
    lastEditNotes = models.TextField(null=True, blank=True)

class Locations(models.Model):
    locationName = models.TextField()
    lon = models.FloatField()
    lat = models.FloatField()
    locationType = models.TextField()
    matchNotes = models.TextField()
    locality = models.CharField(max_length=30)
    accuracy = models.IntegerField() #0-6
    dateTimeModified = models.DateTimeField(auto_now=True)
    lastEditedBy = models.CharField(max_length=30,null=True, blank=True)
    lastEditNotes = models.TextField(null=True, blank=True)

class Publications(models.Model):
    author = models.CharField(max_length=30)
    paperurl = models.TextField()
    dateTimeModified = models.DateTimeField(auto_now=True)
    lastEditedBy = models.CharField(max_length=30,null=True, blank=True)
    lastEditNotes = models.TextField(null=True, blank=True)

class LocHapPub(models.Model):
    location = models.ForeignKey(Locations, on_delete=models.CASCADE)
    haplotype = models.ForeignKey(Sequences, on_delete=models.CASCADE)
    #genBankAccession = models.CharField(max_length=30)
    author = models.ForeignKey(Publications, on_delete=models.CASCADE, null=True)
    dateTimeModified = models.DateTimeField(auto_now=True)
    lastEditedBy = models.CharField(max_length=30,null=True, blank=True)
    lastEditNotes = models.TextField(null=True, blank=True)
    
class LHPIndividual(models.Model):
    LHP = models.ForeignKey(LocHapPub, on_delete=models.CASCADE, null=True)
    genBankAccession = models.CharField(max_length=30,null=True)
    numLions = models.IntegerField(null=True, blank=True)
    dateTimeModified = models.DateTimeField(auto_now=True)
    lastEditedBy = models.CharField(max_length=30,null=True, blank=True)
    lastEditNotes = models.TextField(null=True, blank=True)
