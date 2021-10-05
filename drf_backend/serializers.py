from rest_framework import serializers
from .models import Sequences, Locations, Publications, LocHapPub, LHPIndividual

class SequencesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sequences
        fields = '__all__'

class LocationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Locations
        fields = '__all__'

class PublicationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publications
        fields = '__all__'

class LocHapPubSerializer(serializers.ModelSerializer):
    class Meta:
        model = LocHapPub
        fields = '__all__'

class LHPIndividualSerializer(serializers.ModelSerializer):
    class Meta:
        model = LHPIndividual
        fields = '__all__'


