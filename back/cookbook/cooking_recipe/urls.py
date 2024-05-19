from django.urls import path
from .views import CategoryViewSet, FoodViewSet, FoodListViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register(r"category/", ProfilesViewSet)
router.register(r"foodlist/", FoodListViewSet)
router.register(r"food/", FoodViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
