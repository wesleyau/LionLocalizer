from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.decorators import permission_required
from django.contrib import messages

import json, time, datetime, csv, numbers, io
from .Align import Align
from rest_framework import status
from rest_framework.decorators import api_view, parser_classes
from rest_framework.response import Response
from rest_framework.parsers import JSONParser


from .models import LocHapPub, Sequences, Locations, Publications, LocHapPub, LHPIndividual
from .serializers import SequencesSerializer, LocationsSerializer, PublicationsSerializer, LocHapPubSerializer, LHPIndividualSerializer

# Create your views here.

#Sequences
@api_view(['GET'])
def sequencesView(request):
    sequences_urls = {
        'list':'/sequences-list/',
        'Detail View': '/sequences-detail/<str:pk>',
        'Create':'/sequences-create/',
        'Update':'/sequences-update/<str:pk>/',
        'Delete':'/sequences-delete/<str:pk>/',
        'Deleteall': '/sequences-delete-all',
        }

    return Response(sequences_urls)       

@api_view(['GET'])
def sequencesList(request):
    sequences = Sequences.objects.all()
    serializer = SequencesSerializer(sequences, many=True)
    return Response(serializer.data)   

@api_view(['GET'])
def sequencesDetail(request, pk):
    sequences = Sequences.objects.get(id=pk)
    serializer = SequencesSerializer(sequences, many=False)
    return Response(serializer.data)              

@api_view(['POST'])
def sequencesCreate(request):
    serializer = SequencesSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
    else:
        return Response(serializer.errors)

    return Response(serializer.data) 

@api_view(['POST'])
def sequencesUpdate(request, pk):
    sequences = Sequences.objects.get(id=pk)
    serializer = SequencesSerializer(instance=sequences, data=request.data)

    if serializer.is_valid():
        serializer.save()
    else:
        return Response(serializer.errors)

    return Response(serializer.data) 

@api_view(['DELETE'])
def sequencesDelete(request, pk):
    sequences = Sequences.objects.get(id=pk)
    sequences.delete()

    return Response('Sequence successfully deleted')

@api_view(["DELETE"])
def sequencesDeleteAll(request):
    sequences = Sequences.objects.all()
    sequences.delete()

    return Response('All sequences successfully deleted')


#Locations
@api_view(['GET'])
def locationsView(request):
    locations_urls = {
        'list':'/locations-list/',
        'Detail View': '/locations-detail/<str:pk>',
        'Create':'/locations-create/',
        'Update':'/locations-update/<str:pk>/',
        'Delete':'/locations-delete/<str:pk>/',
        'Deleteall': '/locations-delete-all',
        }

    return Response(locations_urls)       

@api_view(['GET'])
def locationsList(request):
    locations = Locations.objects.all()
    serializer = LocationsSerializer(locations, many=True)
    return Response(serializer.data)   

@api_view(['GET'])
def locationsDetail(request, pk):
    locations = Locations.objects.get(id=pk)
    serializer = LocationsSerializer(locations, many=False)
    return Response(serializer.data)              

@api_view(['POST'])
def locationsCreate(request):
    serializer = LocationsSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
    else:
        return Response(serializer.errors)

    return Response(serializer.data) 

@api_view(['POST'])
def locationsUpdate(request, pk):
    locations = Locations.objects.get(id=pk)
    serializer = LocationsSerializer(instance=locations, data=request.data)

    if serializer.is_valid():
        serializer.save()
    else:
        return Response(serializer.errors)

    return Response(serializer.data) 

@api_view(['DELETE'])
def locationsDelete(request, pk):
    locations = Locations.objects.get(id=pk)
    locations.delete()

    return Response('Location successfully deleted')

@api_view(["DELETE"])
def locationsDeleteAll(request):
    locations = Locations.objects.all()
    locations.delete()

    return Response('All locations successfully deleted')

#Publications
@api_view(['GET'])
def publicationsView(request):
    publications_urls = {
        'list':'/publications-list/',
        'Detail View': '/publications-detail/<str:pk>',
        'Create':'/publications-create/',
        'Update':'/publications-update/<str:pk>/',
        'Delete':'/publications-delete/<str:pk>/',
        'Deleteall': '/publications-delete-all',
        }

    return Response(publications_urls)       

@api_view(['GET'])
def publicationsList(request):
    publications = Publications.objects.all()
    serializer = PublicationsSerializer(publications, many=True)
    return Response(serializer.data)   

@api_view(['GET'])
def publicationsDetail(request, pk):
    publications = Publications.objects.get(id=pk)
    serializer = PublicationsSerializer(publications, many=False)
    return Response(serializer.data)              

@api_view(['POST'])
def publicationsCreate(request):
    serializer = PublicationsSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
    else:
        return Response(serializer.errors)

    return Response(serializer.data) 

@api_view(['POST'])
def publicationsUpdate(request, pk):
    publications = Publications.objects.get(id=pk)
    serializer = PublicationsSerializer(instance=publications, data=request.data)

    if serializer.is_valid():
        serializer.save()
    else:
        return Response(serializer.errors)

    return Response(serializer.data) 

@api_view(['DELETE'])
def publicationsDelete(request, pk):
    publications = Publications.objects.get(id=pk)
    publications.delete()

    return Response('Publication successfully deleted')

@api_view(["DELETE"])
def publicationsDeleteAll(request):
    publications = Publications.objects.all()
    publications.delete()

    return Response('All publications successfully deleted')

#LocHapPub
@api_view(['GET'])
def lochappubView(request):
    lochappub_urls = {
        'list':'/lochappub-list/',
        'Detail View': '/lochappub-detail/<str:pk>',
        'Create':'/lochappub-create/',
        'Update':'/lochappub-update/<str:pk>/',
        'Delete':'/lochappub-delete/<str:pk>/',
        'Deleteall': '/lochappub-delete-all',
        }

    return Response(lochappub_urls)       

@api_view(['GET'])
def lochappubList(request):
    lochappub = LocHapPub.objects.all()
    serializer = LocHapPubSerializer(lochappub, many=True)
    return Response(serializer.data)   

@api_view(['GET'])
def lochappubDetail(request, pk):
    lochappub = LocHapPub.objects.get(id=pk)
    serializer = LocHapPubSerializer(lochappub, many=False)
    return Response(serializer.data)              

@api_view(['POST'])
def lochappubCreate(request):
    serializer = LocHapPubSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
    else:
        return Response(serializer.errors)

    return Response(serializer.data) 

@api_view(['POST'])
def lochappubUpdate(request, pk):
    lochappub = LocHapPub.objects.get(id=pk)
    serializer = LocHapPubSerializer(instance=lochappub, data=request.data)

    if serializer.is_valid():
        serializer.save()
    else:
        return Response(serializer.errors)

    return Response(serializer.data) 

@api_view(['DELETE'])
def lochappubDelete(request, pk):
    lochappub = LocHapPub.objects.get(id=pk)
    lochappub.delete()

    return Response('LopHapPub successfully deleted')

@api_view(["DELETE"])
def lochappubDeleteAll(request):
    lochappub = LocHapPub.objects.all()
    lochappub.delete()

    return Response('All LocHapPubs successfully deleted')


#LHPIndividual
@api_view(['GET'])
def lhpindividualView(request):
    lhpindividual_urls = {
        'list':'/lhpindividual-list/',
        'Detail View': '/lhpindividual-detail/<str:pk>',
        'Create':'/lhpindividual-create/',
        'Update':'/lhpindividual-update/<str:pk>/',
        'Delete':'/lhpindividual-delete/<str:pk>/',
        'Deleteall': '/lhpindividual-delete-all',
        }

    return Response(lhpindividual_urls)       

@api_view(['GET'])
def lhpindividualList(request):
    lhpindividual = LHPIndividual.objects.all()
    serializer = LHPIndividualSerializer(lhpindividual, many=True)
    return Response(serializer.data)   

@api_view(['GET'])
def lhpindividualDetail(request, pk):
    lhpindividual = LHPIndividual.objects.get(id=pk)
    serializer = LHPIndividualSerializer(lhpindividual, many=False)
    return Response(serializer.data)              

@api_view(['POST'])
def lhpindividualCreate(request):
    serializer = LHPIndividualSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
    else:
        return Response(serializer.errors)

    return Response(serializer.data) 

@api_view(['POST'])
def lhpindividualUpdate(request, pk):
    lhpindividual = LHPIndividual.objects.get(id=pk)
    serializer = LHPIndividualSerializer(instance=lhpindividual, data=request.data)

    if serializer.is_valid():
        serializer.save()
    else:
        return Response(serializer.errors)

    return Response(serializer.data) 

@api_view(['DELETE'])
def lhpindividualDelete(request, pk):
    lhpindividual = LHPIndividual.objects.get(id=pk)
    lhpindividual.delete()

    return Response('LHPIndividual successfully deleted')

@api_view(["DELETE"])
def lhpindividualDeleteAll(request):
    lhpindividual = LHPIndividual.objects.all()
    lhpindividual.delete()

    return Response('All LHPIndividuals successfully deleted')


#test - make a list of dictionary in Align.py with the output alignment in one of the values
#along with the other values as well, then send out the whole dictionary to the alginment results page
@api_view(['GET'])
def test(request):
    dict = [{"id":"1","key":"value"},{"id":"2","key":"value2"}]
    return Response(dict[1]) 

#alignment
@api_view(['POST'])
@parser_classes([JSONParser])
def alignment(request, format=None):
    output = Align(request)
    #If there is an error
    #look at django redirect for errors
    if len(output) > 0:
        return Response(output)
    #no errors, implied else
    return Response(output)

    #next step is to import all the information into the database


#CSV Uploads to database - one for each model
#@permission_required('admin.can_add_log_entry')
@api_view(['GET', 'POST'])
def sequenceCsv(request):
    template = "sequenceUpload.html"

    prompt = {'order': 'VERY IMPORTANT: Sequences upload should only be 4 columns. Order of the columns in the CSV should be haplotype_id, cytB, lastEditedBy, and lastEditNotes.  lastEditBy and lastEditNotes can be empty'
    }

    if request.method == "GET":
        return render(request, template, prompt)

    csvFile = request.FILES['sequenceFile']
    
    if not csvFile.name.endswith('.csv'):
        messages.error(request, 'This is not a csv file')

    dataSet = csvFile.read().decode('UTF-8')
    ioString = io.StringIO(dataSet)

    next(ioString) #skip header
    for column in csv.reader(ioString, delimiter=',', quotechar='|'):
        _, created = Sequences.objects.update_or_create(
            id=column[0],
            cytB=column[1],
            lastEditedBy=column[2],
            lastEditNotes=column[3]
        )
    context = {}
    return render(request, template, context)

@api_view(['GET', 'POST'])
def locationCsv(request):
    template = "locationUpload.html"

    prompt = {'order': 'VERY IMPORTANT: locations upload should only be 10 columns - Order of the columns in the CSV should be id, locationName, lon, lat, locationType, matchnNotes, locality, accuracy, lastEditedBy, and lastEditNotes -  lastEditBy and lastEditNotes can be empty'
    }

    if request.method == "GET":
        return render(request, template, prompt)

    csvFile = request.FILES['locationFile']
    
    if not csvFile.name.endswith('.csv'):
        messages.error(request, 'This is not a csv file')

    dataSet = csvFile.read().decode('UTF-8')
    ioString = io.StringIO(dataSet)

    next(ioString) #skip header
    for column in csv.reader(ioString, delimiter=',', quotechar='|'):
        _, created = Locations.objects.update_or_create(
            id=column[0],
            locationName=column[1],
            lon=column[2],
            lat=column[3],
            locationType=column[4],
            matchNotes=column[5],
            locality=column[6],
            accuracy=column[7],
            lastEditedBy=column[8],
            lastEditNotes=column[9]
        )
    context = {}
    return render(request, template, context)

@api_view(['GET', 'POST'])
def publicationCsv(request):
    template = "publicationUpload.html"

    prompt = {'order': 'VERY IMPORTANT: publications upload should only be 5 columns - Order of the columns in the CSV should be id, author, paperurl, lastEditedBy, and lastEditNotes.  lastEditBy and lastEditNotes can be empty'
    }

    if request.method == "GET":
        return render(request, template, prompt)

    csvFile = request.FILES['publicationFile']
    
    if not csvFile.name.endswith('.csv'):
        messages.error(request, 'This is not a csv file')

    dataSet = csvFile.read().decode('UTF-8')
    ioString = io.StringIO(dataSet)

    next(ioString) #skip header
    for column in csv.reader(ioString, delimiter=',', quotechar='|'):
        _, created = Publications.objects.update_or_create(
            id=column[0],
            author=column[1],
            paperurl=column[2],
            lastEditedBy=column[3],
            lastEditNotes=column[4]
        )
    context = {}
    return render(request, template, context)

@api_view(['GET', 'POST'])
def lochappubCsv(request):
    template = "lochappubUpload.html"

    prompt = {'order': 'VERY IMPORTANT: lochappub upload should only be 6 columns - Order of the columns in the CSV should be id, location, haplotype, author, lastEditedBy, and lastEditNotes.  lastEditBy and lastEditNotes can be empty'
    }

    if request.method == "GET":
        return render(request, template, prompt)

    csvFile = request.FILES['lochappubFile']
    
    if not csvFile.name.endswith('.csv'):
        messages.error(request, 'This is not a csv file')

    dataSet = csvFile.read().decode('UTF-8')
    ioString = io.StringIO(dataSet)

    next(ioString) #skip header
    for column in csv.reader(ioString, delimiter=',', quotechar='|'):
        _, created = LocHapPub.objects.update_or_create(
            id=column[0],
            location=Locations.objects.get(id = column[1]),
            haplotype=Sequences.objects.get(id = column[2]),
            author=Publications.objects.get(id=column[3]),
            lastEditedBy=column[4],
            lastEditNotes=column[5],
        )
    context = {}
    return render(request, template, context)

@api_view(['GET', 'POST'])
def lhpindividualCsv(request):
    template = "lhpindividualUpload.html"

    prompt = {'order': 'VERY IMPORTANT: lhpindividual upload should only be 6 columns - Order of the columns in the CSV should be id, LHP, genBankAccession, numLions, lastEditedBy, and lastEditNotes.  lastEditBy and lastEditNotes can be empty'
    }

    if request.method == "GET":
        return render(request, template, prompt)

    csvFile = request.FILES['lhpFile']
    
    if not csvFile.name.endswith('.csv'):
        messages.error(request, 'This is not a csv file')

    dataSet = csvFile.read().decode('UTF-8')
    ioString = io.StringIO(dataSet)

    next(ioString) #skip header
    for column in csv.reader(ioString, delimiter=',', quotechar='|'):
        _, created = LHPIndividual.objects.update_or_create(
            id=column[0],
            LHP=LocHapPub.objects.get(id=column[1]),
            genBankAccession=column[2],
            numLions=column[3],
            lastEditedBy=column[4],
            lastEditNotes=column[5]
        )
    context = {}
    return render(request, template, context)

#NOT TESTED
@api_view(['GET'])
def getCsv(request):
  response = HttpResponse(content_type='text/csv')
  response['Content-Disposition'] = 'attachment; filename="allDB.csv"'
  writer = csv.writer(response)
  writer.writerow("lhpi.pk,lhpi.genBankAccession,lhpi.numLions,lhpi.datetimeModified,lhpi.lastEditedBy,lhpi.lastEditNotes,lhp.pk,lhp.lastEditedBy,lhp.lastEditNotes,loc.locationName,loc.lon,loc.lat,loc.locationType,loc.matchNotes,loc.locality,loc.accuracy,loc.datetimeModified,loc.lastEditedBy,loc.lastEditNotes,pub.author,pub.paperurl,pub.datetimeModified,pub.lastEditedBy,pub.lastEditNotes,hap.seq,hap.datetimeModified,hap.lastEditedBy,hap.lastEditNotes".split(","))
  for lhpi in LHPIndividual.objects.all():
    try:
      returnArr = [lhpi.pk,lhpi.genBankAccession,lhpi.numLions,lhpi.datetimeModified,lhpi.lastEditedBy,lhpi.lastEditNotes]
      lhp = LocHapPub.objects.get(pk=lhpi.LHP_id) #should actually only have one item
      returnArr.extend([lhp.pk,lhp.lastEditedBy,lhp.lastEditNotes])
      loc = Locations.objects.get(pk=lhp.location.pk) #should actually only have one item
      returnArr.extend([loc.locationName,loc.lon,loc.lat,loc.locationType,loc.matchNotes,loc.locality,loc.accuracy,loc.datetimeModified,loc.lastEditedBy,loc.lastEditNotes])
      pub = Publications.objects.get(pk=lhp.author.pk) #should actually only have one item
      returnArr.extend([pub.author,pub.paperurl,pub.datetimeModified,pub.lastEditedBy,pub.lastEditNotes])
      hap = Sequences.objects.get(pk=lhp.haplotype.pk)
      returnArr.extend([hap.pk,hap.seq,hap.datetimeModified,hap.lastEditedBy,hap.lastEditNotes])

      returnArrUnicode = []
      for s in returnArr:
        if isinstance(s, numbers.Number) or isinstance(s, datetime):
          returnArrUnicode.append(str(s).encode("utf-8"))
        elif s == None:
          returnArrUnicode.append("".encode("utf-8"))
        else:
          returnArrUnicode.append(s.encode("utf-8"))
      writer.writerow(returnArrUnicode)
    except:
      pass
  return response