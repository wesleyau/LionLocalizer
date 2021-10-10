from django.urls import path
from .views import index

urlpatterns = [
    path("", index),
    path("query", index),
    path("protocol", index),
    path("publications", index),
    path("faq", index),
    path("contact", index),
    path("copyright", index),
    path("privacy", index),
    path("admin", index),
    path("output", index),
]
