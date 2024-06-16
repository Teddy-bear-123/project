from django.db import models
from django.contrib.auth.models import User

# User


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    is_admin = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username

# The data we get from uploads

class DataEntry(models.Model):
    DATA_TYPES = (
        ("text", "Text"),
        ("image", "Image"),
        ("video", "Video"),
    )

    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="data_entries"
    )
    data_type = models.CharField(max_length=10, choices=DATA_TYPES)
    text_data = models.TextField(null=True, blank=True)
    image_data = models.ImageField(upload_to="images/", null=True, blank=True)
    video_data = models.FileField(upload_to="videos/", null=True, blank=True)
    grade = models.CharField(max_length=10, null=True, blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"DataEntry {self.id} by {self.user.username}"
