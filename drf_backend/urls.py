#urls.py
from django.urls import path
from . import views


urlpatterns = [
    #sequences
    path('sequence', views.sequencesView, name="sequence"),
    path('sequence-list/', views.sequencesList, name="sequence-list"),
    path('sequence-detail/<str:pk>', views.sequencesDetail, name="sequence-detail"),
    path('sequence-create/', views.sequencesCreate, name="sequence-create"),
    path('sequence-update/<str:pk>', views.sequencesUpdate, name="sequence-update"),
    path('sequence-delete/<str:pk>', views.sequencesDelete, name="sequence-delete"),
    path('sequence-delete-all/', views.sequencesDeleteAll, name="sequence-delete-all"),

    #locations
    path('location', views.locationsView, name="location"),
    path('location-list/', views.locationsList, name="location-list"),
    path('location-detail/<str:pk>', views.locationsDetail, name="location-detail"),
    path('location-create/', views.locationsCreate, name="location-create"),
    path('location-update/<str:pk>', views.locationsUpdate, name="location-update"),
    path('location-delete/<str:pk>', views.locationsDelete, name="location-delete"),
    path('location-delete-all/', views.locationsDeleteAll, name="location-delete-all"),

    #publications
    path('publication', views.publicationsView, name="publication"),
    path('publication-list/', views.publicationsList, name="publication-list"),
    path('publication-detail/<str:pk>', views.publicationsDetail, name="publication-detail"),
    path('publication-create/', views.publicationsCreate, name="publication-create"),
    path('publication-update/<str:pk>', views.publicationsUpdate, name="publication-update"),
    path('publication-delete/<str:pk>', views.publicationsDelete, name="publication-delete"),
    path('publication-delete-all/', views.publicationsDeleteAll, name="publication-delete-all"),

    #LocHapPub
    path('lochappub', views.lochappubView, name="lochappub"),
    path('lochappub-list/', views.lochappubList, name="lochappub-list"),
    path('lochappub-detail/<str:pk>', views.lochappubDetail, name="lochappub-detail"),
    path('lochappub-create/', views.lochappubCreate, name="lochappub-create"),
    path('lochappub-update/<str:pk>', views.lochappubUpdate, name="lochappub-update"),
    path('lochappub-delete/<str:pk>', views.lochappubDelete, name="lochappub-delete"),
    path('lochappub-delete-all/', views.lochappubDeleteAll, name="lochappub-delete-all"),

    #LHPIndividual
    path('lhpindividual', views.lhpindividualView, name="lhpindividual"),
    path('lhpindividual-list/', views.lhpindividualList, name="lhpindividual-list"),
    path('lhpindividual-detail/<str:pk>', views.lhpindividualDetail, name="lhpindividual-detail"),
    path('lhpindividual-create/', views.lhpindividualCreate, name="lhpindividual-create"),
    path('lhpindividual-update/<str:pk>', views.lhpindividualUpdate, name="lhpindividual-update"),
    path('lhpindividual-delete/<str:pk>', views.lhpindividualDelete, name="lhpindividual-delete"),
    path('lhpindividual-delete-all/', views.lhpindividualDeleteAll, name="lhpindividual-delete-all"),

    #alignment
    path('align/', views.alignment, name="alignment"),
    
    #csv
    path('sequence-csv/', views.sequenceCsv, name="sequence-csv"),
    path('location-csv/', views.locationCsv, name="location-csv"),
    path('publication-csv/', views.publicationCsv, name="publication-csv"),
    path('lochappub-csv/', views.lochappubCsv, name="lochappub-csv"),
    path('lhpindividual-csv/', views.lhpindividualCsv, name="lhpinidividual-csv"),
    path('getcsv/', views.getCsv, name="getcsv")
    ]