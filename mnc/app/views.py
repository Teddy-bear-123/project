from django.shortcuts import render
from rest_framework import viewsets
from .models import DataEntry
from .serializers import DataEntrySerializer, UserSerializer
from rest_framework.permissions import IsAuthenticated


class DataEntryViewSet(viewsets.ModelViewSet):
    queryset = DataEntry.objects.all()
    serializer_class = DataEntrySerializer
    permission_classes = [IsAuthenticated]


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
