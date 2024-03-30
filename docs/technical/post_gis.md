# POSTGis With Django
To achieve this with Django and PostGIS, you can use the `django.contrib.gis.db.models` module to define your model with geographic fields, and then use the `GEOSGeometry` object to perform spatial queries.

Here's an example of how you can create a Django model for rooms with geographic fields and a function to get all rooms within a given radius from a specified center point:

Assuming you have a model called `Room`:

```python
# models.py

from django.contrib.gis.db import models
from django.contrib.gis.geos import GEOSGeometry
from django.contrib.gis.measure import Distance

class Room(models.Model):
    name = models.CharField(max_length=255)
    location = models.PointField()

    def __str__(self):
        return self.name

    @classmethod
    def get_rooms_within_radius(cls, center_longitude, center_latitude, radius_km):
        center_point = GEOSGeometry(f'POINT({center_longitude} {center_latitude})', srid=4326)
        radius = Distance(km=radius_km)

        rooms_within_radius = cls.objects.filter(location__distance_lte=(center_point, radius))

        return rooms_within_radius
```

In this example, the `Room` model has a `PointField` named `location` to store the geographic coordinates of the room. The `get_rooms_within_radius` class method takes a center point (longitude and latitude) and a radius in kilometers, then uses the `__distance_lte` filter to get all rooms within the specified radius.

Make sure you have the necessary dependencies installed, including Django with GIS support and the PostGIS extension for PostgreSQL.

In your settings, ensure that you've configured the spatial database settings:

```python
# settings.py

DATABASES = {
    'default': {
        'ENGINE': 'django.contrib.gis.db.backends.postgis',
        'NAME': 'your_database_name',
        'USER': 'your_database_user',
        'PASSWORD': 'your_database_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

# Make sure to include the 'django.contrib.gis' app in your INSTALLED_APPS.
INSTALLED_APPS = [
    # ...
    'django.contrib.gis',
    # ...
]
```

After making these changes, you can use the `get_rooms_within_radius` method to retrieve rooms within a given radius from a specified center point. For example:

```python
center_longitude = -73.9808
center_latitude = 40.7644
radius_km = 5

rooms_within_radius = Room.get_rooms_within_radius(center_longitude, center_latitude, radius_km)
print(rooms_within_radius)
```

Adjust the values for the center point and radius according to your requirements.

## Now, I'm confused. Room model will be save in PgSQL db or PostGIS db? Will it be good if we use PostGIS db for Room model too?

In the context of Django with PostGIS, it's essential to understand that PostGIS is an extension for PostgreSQL, enabling support for geographic objects. When you use PostGIS with Django, you're still using a PostgreSQL database, but with added spatial capabilities.

The `PointField` and other spatial fields provided by `django.contrib.gis.db.models` are specifically designed to work with PostGIS. Therefore, when you define a model with a `PointField` (or other spatial fields) in Django, you are effectively storing geographic information in a PostgreSQL database with the PostGIS extension enabled.

In summary, the `Room` model, as defined in the previous example, will be saved in a PostgreSQL database with the PostGIS extension. There is no need to explicitly mention "PostGIS database" separately; instead, you're utilizing PostGIS as an extension for PostgreSQL to handle the spatial aspects of your data.

So, to answer your question, it is indeed recommended to use PostGIS for the `Room` model, as the spatial fields provided by Django are designed to work seamlessly with PostGIS, offering support for various geographic operations and queries.
