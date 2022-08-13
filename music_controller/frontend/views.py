from django.shortcuts import render

# Create your views here.
def index(reqest, *args, **kwargs):
    return render(reqest, 'frontend/index.html')