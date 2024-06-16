from rest_framework import serializers
from .models import Profile, DataEntry, GradingAlgorithm
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Profile
        fields = ['user', 'is_admin']

class DataEntrySerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = DataEntry
        fields = '__all__'
        extra_kwargs = {
            'text_data': {'required': False},
            'image_data': {'required': False},
            'video_data': {'required': False},
        }

    def validate(self, data):
        if data['data_type'] == 'text' and not data.get('text_data'):
            raise serializers.ValidationError("Text data is required for text entries.")
        if data['data_type'] == 'image' and not data.get('image_data'):
            raise serializers.ValidationError("Image file is required for image entries.")
        if data['data_type'] == 'video' and not data.get('video_data'):
            raise serializers.ValidationError("Video file is required for video entries.")
        return data

class GradingAlgorithmSerializer(serializers.ModelSerializer):
    class Meta:
        model = GradingAlgorithm
        fields = '__all__'
