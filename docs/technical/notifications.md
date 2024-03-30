# Notification Service
RabbitMQ is a message broker, and it typically facilitates communication between microservices by enabling them to exchange messages. While RabbitMQ itself doesn't directly interact with web services or manage live notifications in a web view, you can use RabbitMQ in combination with other tools and technologies to achieve this functionality.

Here's a high-level overview of how you might approach the scenario of managing live notifications in a web view using RabbitMQ, Django microservices, and a Nuxt.js (Vue.js) frontend:

1. **Microservices Architecture:**
	- **Django Microservices:** Develop separate Django microservices to handle different functionalities of your application. Each microservice can have its own responsibility and can communicate with others via RabbitMQ.
	- **RabbitMQ:** Use RabbitMQ to allow microservices to exchange messages asynchronously. Microservices can publish messages to RabbitMQ queues, and other microservices can consume these messages.

2. **Notification Service:**
	- Create a microservice specifically responsible for handling notifications. When an event occurs that triggers a notification (e.g., new data, updates, etc.), this microservice can publish a message to a RabbitMQ queue.
	- Consumers (subscribers) interested in notifications can listen to the queue and process the messages accordingly.

3. **Web Socket Communication:**
	- Use web sockets to establish a persistent connection between the Nuxt.js (Vue.js) frontend and the server. Web sockets enable real-time communication between the server and the client.
	- When the notification microservice receives an event that triggers a notification, it can push a notification message through a web socket connection to the Nuxt.js frontend.

4. **Nuxt.js Integration:**
	- In your Nuxt.js application, establish a connection to the web socket server (you can use libraries like `socket.io` or `vue-native-websocket` for this purpose).
	- When the Nuxt.js frontend receives a notification message through the web socket connection, update the user interface to display the live notification.

By combining RabbitMQ for asynchronous message communication between microservices and web sockets for real-time communication with the frontend, you can create a scalable and efficient system for managing live notifications.

Remember that handling live notifications involves considerations for security, scalability, and error handling. Ensure that you implement appropriate security measures, such as authentication and authorization, and handle potential issues, such as network failures or message processing errors, gracefully.

Additionally, tools like Celery in conjunction with RabbitMQ can be useful for handling background tasks and asynchronous processing in your Django microservices.

# Example with RabbitMQ, Notification Service and DJango Channels
Certainly! Below is an example implementation of a Nuxt.js (Vue.js) frontend, Django Room Service, RabbitMQ, and Notification Service. The communication between services is achieved using RabbitMQ for asynchronous messaging, and real-time notifications are sent to the Nuxt.js frontend using web sockets.

Please note that this is a simplified example, and in a real-world scenario, you would need to handle error cases, implement security measures, and fine-tune configurations.

### Nuxt.js (Vue.js) Frontend

1. Install required packages:

```bash
# Nuxt.js project setup
npx create-nuxt-app nuxt-rabbitmq-notifications
cd nuxt-rabbitmq-notifications
npm install --save vue-native-websocket
```

2. Update `nuxt.config.js` to configure the WebSocket connection:

```javascript
// nuxt.config.js

export default {
  // Other configurations...

  modules: [
    // Other modules...
    'vue-native-websocket/nuxt',
  ],

  websocket: {
    url: 'ws://localhost:8000/ws/', // Update with your Django server WebSocket URL
  },
}
```

3. Create a component to display notifications:

```html
<!-- components/NotificationList.vue -->

<template>
  <div>
    <h2>Notifications</h2>
    <ul>
      <li v-for="notification in notifications" :key="notification.id">{{ notification.message }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notifications: [],
    };
  },
  mounted() {
    this.$options.sockets.onmessage = (message) => {
      const notification = JSON.parse(message.data);
      this.notifications.push(notification);
    };
  },
};
</script>
```

4. Update `pages/index.vue` to use the notification component:

```html
<!-- pages/index.vue -->

<template>
  <div>
    <h1>Room Booking App</h1>
    <!-- Your room booking form goes here -->
    <NotificationList />
  </div>
</template>

<script>
import NotificationList from '~/components/NotificationList.vue';

export default {
  components: {
    NotificationList,
  },
  // Your component logic...
};
</script>
```

### Django Room Service

1. Install required packages:

```bash
pip install django djangorestframework django-cors-headers pika
```

2. Update Django settings:

```python
# settings.py

INSTALLED_APPS = [
    # Other apps...
    'corsheaders',
    'room_service',
]

MIDDLEWARE = [
    # Other middleware...
    'corsheaders.middleware.CorsMiddleware',
]

CORS_ALLOW_ALL_ORIGINS = True

# RabbitMQ configurations
RABBITMQ_HOST = 'localhost'
RABBITMQ_PORT = 5672
RABBITMQ_USER = 'guest'
RABBITMQ_PASSWORD = 'guest'
RABBITMQ_VIRTUAL_HOST = '/'
```

3. Create a Django app (`room_service`):

```bash
python manage.py startapp room_service
```

4. Update `room_service/models.py`:

```python
# room_service/models.py

from django.db import models

class Room(models.Model):
    name = models.CharField(max_length=255)

class Booking(models.Model):
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
```

5. Update `room_service/views.py`:

```python
# room_service/views.py

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import pika
import json

from .models import Booking

@csrf_exempt
def create_booking(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        room_id = data.get('room_id')
        start_time = data.get('start_time')
        end_time = data.get('end_time')

        room = Room.objects.get(id=room_id)
        booking = Booking.objects.create(room=room, start_time=start_time, end_time=end_time)

        # Publish booking notification to RabbitMQ
        publish_notification(booking)

        return JsonResponse({'message': 'Booking created successfully'})
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=400)

def publish_notification(booking):
    connection = pika.BlockingConnection(pika.ConnectionParameters(
        host=settings.RABBITMQ_HOST,
        port=settings.RABBITMQ_PORT,
        virtual_host=settings.RABBITMQ_VIRTUAL_HOST,
        credentials=pika.PlainCredentials(
            username=settings.RABBITMQ_USER,
            password=settings.RABBITMQ_PASSWORD,
        ),
    ))

    channel = connection.channel()
    channel.queue_declare(queue='notifications')

    notification = {
        'id': booking.id,
        'message': f'New booking for room {booking.room.name} at {booking.start_time}',
    }

    channel.basic_publish(exchange='', routing_key='notifications', body=json.dumps(notification))

    connection.close()
```

6. Update `room_service/urls.py`:

```python
# room_service/urls.py

from django.urls import path
from .views import create_booking

urlpatterns = [
    path('create-booking/', create_booking, name='create_booking'),
    # Other URL patterns...
]
```

7. Update `urls.py` in the main project folder:

```python
# urls.py

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('room-service/', include('room_service.urls')),
    # Other URL patterns...
]
```

### RabbitMQ and Notification Service

1. Install RabbitMQ: Follow the official RabbitMQ installation guide for your operating system (https://www.rabbitmq.com/download.html).

2. Create a RabbitMQ queue for notifications:

	 ```python
	 # notification_service.py

	 import pika
	 import json
	 from channels.layers import get_channel_layer

	 channel_layer = get_channel_layer()

	 def callback(ch, method, properties, body):
			 notification = json.loads(body.decode('utf-8'))

			 # Send notification to Nuxt.js frontend using web sockets
			 async def send_notification():
					 await channel_layer.group_send(
							 'notifications',
							 {
									 'type': 'notification.message',
									 'message': notification,
							 }
					 )

			 asyncio.get_event_loop().run_until_complete(send_notification())

	 connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
	 channel = connection.channel()
	 channel.queue_declare(queue='notifications')
	 channel.basic_consume(queue='notifications', on_message_callback=callback, auto_ack=True)

	 print(' [*] Waiting for notifications. To exit press CTRL+C')
	 channel.start_consuming()
	 ```

3. Run the Notification Service:

	 ```bash
	 python notification_service.py
	 ```

### Docker Compose
Apologies for the confusion. You are correct; I missed including the Notification Service in the Docker Compose file. Here's the continuation and completion of the `docker-compose.yml` file:

```yaml
version: '3'

services:
  nuxt-frontend:
    build:
      context: ./nuxt-frontend
    ports:
      - "3000:3000"
    depends_on:
      - django-room-service

  django-room-service:
    build:
      context: ./django-room-service
    ports:
      - "8000:8000"
    depends_on:
      - rabbitmq
    environment:
      - DJANGO_DB_HOST=db
      - DJANGO_DB_PORT=5432
      - DJANGO_DB_NAME=mydatabase
      - DJANGO_DB_USER=mydatabaseuser
      - DJANGO_DB_PASSWORD=mypassword
      - DJANGO_DEBUG=True
      - DJANGO_SETTINGS_MODULE=config.settings
    command: ["./wait-for-db.sh", "python", "manage.py", "runserver", "0.0.0.0:8000"]

  rabbitmq:
    image: "rabbitmq:management"
    ports:
      - "5672:5672"
      - "15672:15672"

  notification-service:
    build:
      context: ./notification-service
    depends_on:
      - rabbitmq
```

This assumes that you have separate Docker configurations for the Nuxt.js frontend, Django Room Service, and the Notification Service, each in their respective folders (`nuxt-frontend`, `django-room-service`, `notification-service`). Make sure to adjust the service names and paths according to your project structure.

Additionally, note that the `notification-service` service is now included in the Docker Compose file. It will depend on RabbitMQ, and you should have a Dockerfile for the Notification Service in the `notification-service` folder. This service will handle consuming messages from RabbitMQ and sending notifications to the Nuxt.js frontend using web sockets.

Make sure to customize the Docker Compose file and service configurations based on your actual project structure and requirements.
