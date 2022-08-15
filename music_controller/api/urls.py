from django.urls import path
from.views import RoomView

urlpatterns = [
    path('room', RoomView.as_view()),
]

from django.urls import path
from .views import RoomView, CreateRoomViev

urlpatterns = [
    path('room', RoomView.as_view()),
    path('create-room', CreateRoomViev.as_view()),
    ]