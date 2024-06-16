from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UploadedFileViewSet
from .views import upload_file

router = DefaultRouter()
router.register(r"files", UploadedFileViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("files/", upload_file, name="upload_file"),
]
