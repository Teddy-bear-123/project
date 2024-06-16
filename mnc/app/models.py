from django.db import models
from django.contrib.auth.models import User


class UploadedFile(models.Model):
    file = models.FileField(upload_to="uploads/")
    file_type = models.CharField(max_length=50)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        self.file_type = self.file.name.split(".")[-1]
        super().save(*args, **kwargs)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    is_admin = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username
