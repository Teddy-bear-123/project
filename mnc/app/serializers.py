from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UploadedFile


class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UploadedFile
        fields = ("id", "file", "file_type", "uploaded_at")  # Adjust fields as needed


class UploadedFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UploadedFile
        fields = "__all__"
