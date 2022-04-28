from django.urls import path
from .views import index

urlpatterns = [
    path("", index),
    path("query", index),
    path("protocol", index),
    path("references", index),
    path("faq", index),
    path("contact", index),
    path("copyright", index),
    path("terms", index),
    path("instructions", index),
    path("output", index),
]
