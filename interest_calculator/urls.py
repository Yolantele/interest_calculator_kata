from django.urls import path
from .views import calculate, hello


urlpatterns = [

    path('calculate/', calculate, name="calculate"),
    path('hello/', hello, name="hello")
]
