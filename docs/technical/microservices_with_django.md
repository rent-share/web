# microservice with django
Let's create a simple example with two Django microservices. In this scenario, we'll have a `User` microservice responsible for managing user-related functionalities, and an `Order` microservice that handles order processing.

### User Microservice

1. **Django App for User Microservice:**
	- Create a new Django app for the User microservice.

	 ```bash
	 django-admin startapp user_microservice
	 ```

2. **User Model in `user_microservice/models.py`:**
	- Define a simple `User` model.

	 ```python
	 # user_microservice/models.py
	 from django.db import models

	 class User(models.Model):
			 username = models.CharField(max_length=100)
			 email = models.EmailField(unique=True)
			 # Add other user-related fields as needed
	 ```

3. **User Service API in `user_microservice/views.py`:**
	- Implement a basic API for user-related operations.

	 ```python
	 # user_microservice/views.py
	 from rest_framework.views import APIView
	 from rest_framework.response import Response
	 from .models import User
	 from rest_framework import status

	 class UserListView(APIView):
			 def get(self, request):
					 users = User.objects.all()
					 data = [{'username': user.username, 'email': user.email} for user in users]
					 return Response(data)

			 def post(self, request):
					 username = request.data.get('username')
					 email = request.data.get('email')
					 user = User.objects.create(username=username, email=email)
					 return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)
	 ```

### Order Microservice

1. **Django App for Order Microservice:**
	- Create a new Django app for the Order microservice.

	 ```bash
	 django-admin startapp order_microservice
	 ```

2. **Order Model in `order_microservice/models.py`:**
	- Define a simple `Order` model.

	 ```python
	 # order_microservice/models.py
	 from django.db import models
	 from user_microservice.models import User

	 class Order(models.Model):
			 user = models.ForeignKey(User, on_delete=models.CASCADE)
			 product_name = models.CharField(max_length=100)
			 # Add other order-related fields as needed
	 ```

3. **Order Service API in `order_microservice/views.py`:**
	- Implement a basic API for order-related operations.

	 ```python
	 # order_microservice/views.py
	 from rest_framework.views import APIView
	 from rest_framework.response import Response
	 from .models import Order
	 from user_microservice.models import User

	 class OrderListView(APIView):
			 def get(self, request):
					 orders = Order.objects.all()
					 data = [{'user': order.user.username, 'product_name': order.product_name} for order in orders]
					 return Response(data)

			 def post(self, request):
					 username = request.data.get('username')
					 user = User.objects.get(username=username)

					 product_name = request.data.get('product_name')
					 order = Order.objects.create(user=user, product_name=product_name)

					 return Response({'message': 'Order created successfully'})
	 ```

### URLs and Running the Services

1. **Configure URLs:**
	- Configure URLs for both microservices to define the API endpoints.

	 ```python
	 # user_microservice/urls.py
	 from django.urls import path
	 from .views import UserListView

	 urlpatterns = [
			 path('users/', UserListView.as_view(), name='user-list'),
	 ]
	 ```

	 ```python
	 # order_microservice/urls.py
	 from django.urls import path
	 from .views import OrderListView

	 urlpatterns = [
			 path('orders/', OrderListView.as_view(), name='order-list'),
	 ]
	 ```

	 Include these URLs in your project's main `urls.py`.

2. **Run the Services:**
	- Run both microservices using Django's development server.

	 ```bash
	 # In user_microservice directory
	 python manage.py runserver 8000

	 # In order_microservice directory
	 python manage.py runserver 8001
	 ```

Now, you have two Django microservices running on different ports:

- `User Microservice` on http://localhost:8000/users/
- `Order Microservice` on http://localhost:8001/orders/

You can extend these examples by adding more features, authentication, and connecting microservices as needed. This is a basic setup to illustrate the concept of two microservices interacting with each other.

## Introduce RabbitMQ and GraphQL 
Let's enhance the example by incorporating RabbitMQ for communication between the microservices and using GraphQL as a query language for the database.

### Setup RabbitMQ:

1. Install RabbitMQ locally or use a hosted service.

2. Install the `pika` library in both microservices to interact with RabbitMQ:

	 ```bash
	 pip install pika
	 ```

### User Microservice with GraphQL:

1. **Install Required Packages:**

	 ```bash
	 pip install graphene-django
	 ```

2. **Define GraphQL Schema (`user_microservice/schema.py`):**

	 ```python
	 # user_microservice/schema.py
	 import graphene
	 from graphene_django.types import DjangoObjectType
	 from .models import User

	 class UserType(DjangoObjectType):
			 class Meta:
					 model = User

	 class Query(graphene.ObjectType):
			 all_users = graphene.List(UserType)

			 def resolve_all_users(self, info):
					 return User.objects.all()

	 schema = graphene.Schema(query=Query)
	 ```

3. **Integrate GraphQL with Django (`user_microservice/views.py`):**

	 ```python
	 # user_microservice/views.py
	 from django.shortcuts import render
	 from graphene_django.views import GraphQLView
	 from .schema import schema

	 def graphql_view(request, *args, **kwargs):
			 return GraphQLView.as_view(graphiql=True, schema=schema)(request, *args, **kwargs)
	 ```

	 Update the URLs:

	 ```python
	 # user_microservice/urls.py
	 from django.urls import path
	 from .views import UserListView, graphql_view

	 urlpatterns = [
			 path('users/', UserListView.as_view(), name='user-list'),
			 path('graphql/', graphql_view, name='graphql'),
	 ]
	 ```

### Order Microservice with RabbitMQ:

1. **Install Required Packages:**

	 ```bash
	 pip install graphene-django pika
	 ```

2. **Define GraphQL Schema (`order_microservice/schema.py`):**

	 ```python
	 # order_microservice/schema.py
	 import graphene
	 from graphene_django.types import DjangoObjectType
	 from .models import Order

	 class OrderType(DjangoObjectType):
			 class Meta:
					 model = Order

	 class Query(graphene.ObjectType):
			 all_orders = graphene.List(OrderType)

			 def resolve_all_orders(self, info):
					 return Order.objects.all()

	 schema = graphene.Schema(query=Query)
	 ```

3. **Integrate GraphQL with Django (`order_microservice/views.py`):**

	 ```python
	 # order_microservice/views.py
	 from django.shortcuts import render
	 from graphene_django.views import GraphQLView
	 from .schema import schema

	 def graphql_view(request, *args, **kwargs):
			 return GraphQLView.as_view(graphiql=True, schema=schema)(request, *args, **kwargs)
	 ```

	 Update the URLs:

	 ```python
	 # order_microservice/urls.py
	 from django.urls import path
	 from .views import OrderListView, graphql_view

	 urlpatterns = [
			 path('orders/', OrderListView.as_view(), name='order-list'),
			 path('graphql/', graphql_view, name='graphql'),
	 ]
	 ```

4. **Implement RabbitMQ Communication (`order_microservice/views.py`):**

	 ```python
	 # order_microservice/views.py
	 import pika
	 import json
	 from django.http import JsonResponse
	 from .models import Order

	 def publish_order_created(order_data):
			 connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
			 channel = connection.channel()
			 channel.queue_declare(queue='order_created')
			 channel.basic_publish(exchange='', routing_key='order_created', body=json.dumps(order_data))
			 connection.close()

	 class OrderListView(APIView):
			 # ... (previous code)

			 def post(self, request):
					 # ... (previous code)

					 # Publish order creation to RabbitMQ
					 publish_order_created({'user': username, 'product_name': product_name})

					 return Response({'message': 'Order created successfully'})
	 ```

5. **Receive Order Created Events (`user_microservice/views.py`):**

	 ```python
	 # user_microservice/views.py
	 import pika
	 import json
	 from django.http import JsonResponse
	 from .models import User

	 def callback(ch, method, properties, body):
			 order_data = json.loads(body)
			 # Handle the order data, e.g., associate it with the user

	 connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
	 channel = connection.channel()
	 channel.queue_declare(queue='order_created')
	 channel.basic_consume(queue='order_created', on_message_callback=callback, auto_ack=True)
	 channel.start_consuming()
	 ```

	 This code snippet continuously listens for messages from RabbitMQ and invokes the `callback` function when a message is received. The `callback` function can be used to process the order data.

### Running the Services:

1. Run the User Microservice on http://localhost:8000/graphql/
2. Run the Order Microservice on http://localhost:8001/graphql/

Now, you have two Django microservices running GraphQL APIs. When an order is created in the Order Microservice, it publishes an event to RabbitMQ. The User Microservice is listening for this event and can process the order data accordingly.

This example demonstrates a simple integration of GraphQL and RabbitMQ between two Django microservices. Depending on your specific requirements, you may need to enhance error handling, authentication, and implement more sophisticated data processing logic.

## Why RabbitMQ
Using RabbitMQ (or any message broker) for service communication offers several benefits over traditional REST API communication in certain scenarios. Here are some advantages of using RabbitMQ or a message broker:

1. **Asynchronous Communication:**
	- **RabbitMQ:** Enables asynchronous communication between services. Services can send messages without waiting for an immediate response, allowing for greater decoupling and improved system responsiveness.
	- **REST API:** Typically relies on synchronous communication, where the client sends a request and waits for a response. Asynchronous behavior is often achieved through polling or other workarounds.

2. **Decoupling and Scalability:**
	- **RabbitMQ:** Decouples the sender and receiver. Services are not directly dependent on each other, promoting better scalability. If a service is temporarily unavailable, messages can be queued and processed later.
	- **REST API:** Direct calls between services may result in tight coupling, and if one service experiences downtime, it can affect the entire system.

3. **Load Balancing:**
	- **RabbitMQ:** Allows for load balancing by distributing messages across multiple consumers. This helps distribute work evenly and ensures that no single consumer is overwhelmed.
	- **REST API:** Load balancing is typically done at the API gateway level, and clients need to be aware of multiple endpoints for load distribution.

4. **Fault Tolerance:**
	- **RabbitMQ:** Provides fault tolerance and reliability by persisting messages and ensuring they are delivered even if a consumer temporarily goes offline.
	- **REST API:** Relies on the availability of the API endpoint. If the endpoint is unavailable, requests may fail or need to be retried.

5. **Message Routing and Filtering:**
	- **RabbitMQ:** Offers powerful routing and filtering capabilities. Messages can be selectively delivered to specific queues or consumers based on predefined criteria.
	- **REST API:** Requires additional logic and infrastructure to implement message routing and filtering, often handled at the application level.

6. **Event-Driven Architecture:**
	- **RabbitMQ:** Supports event-driven architecture, allowing services to react to events and changes in the system. Events can be broadcast to multiple subscribers.
	- **REST API:** Typically relies on request-response patterns, and implementing true event-driven behavior may require additional complexity.

7. **Loose Coupling:**
	- **RabbitMQ:** Promotes loose coupling between services. Services are not directly aware of each other, reducing the impact of changes in one service on others.
	- **REST API:** Direct API calls can lead to tighter coupling, where changes in one service may require updates in dependent services.

8. **Message Prioritization:**
	- **RabbitMQ:** Supports message prioritization, allowing critical messages to be processed with higher priority than less critical ones.
	- **REST API:** Prioritization needs to be managed at the application level, potentially leading to complex logic.

It's important to note that the choice between RabbitMQ (or a similar message broker) and REST API depends on the specific requirements and characteristics of the system. For scenarios where asynchronous communication, loose coupling, and scalability are crucial, a message broker like RabbitMQ can provide significant advantages. However, for simpler use cases or when direct, synchronous communication is sufficient, REST APIs may be a more straightforward choice. Many systems also use a combination of both approaches to meet different needs within the architecture.
