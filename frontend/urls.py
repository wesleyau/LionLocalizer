from django.urls import path
from .views import index
from django.conf.urls.static import static
from django.conf import settings
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
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
