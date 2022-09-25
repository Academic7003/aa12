from django.contrib import admin
from posts.models import *
from creators.models import *
from django import forms
from ckeditor.widgets import CKEditorWidget


class PostAdminForm(forms.ModelForm):
    body = forms.CharField(widget=CKEditorWidget())
    class Meta:
        model = PostModel
        fields = '__all__'

class PostAdmin(admin.ModelAdmin):
    form = PostAdminForm

admin.site.register(PostModel, PostAdmin)
admin.site.register(Creator)

