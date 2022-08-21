from django.urls import path
from.views import RoomView

urlpatterns = [
    path('room', RoomView.as_view()),
]

from django.urls import path
from .views import RoomView, CreateRoomViev, GetRoom, JoinRoom

urlpatterns = [
    path('room', RoomView.as_view()),
    path('create-room', CreateRoomViev.as_view()),
    path('get-room', GetRoom.as_view()),
    path('join-room', JoinRoom.as_view()),
    ]