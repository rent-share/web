# Docker Swarm for Container Orchestration

Docker Swarm is a container orchestration tool that allows you to manage and scale Docker containers across multiple hosts. In this example, I'll guide you through setting up Docker Swarm for two microservices (User and Order) and a web service using Docker Compose.

### Prerequisites:
- Docker installed on your machine (Docker Engine and Docker Compose).
- Basic understanding of Docker and Docker Compose.

### Docker Compose for Microservices:

1. **User Microservice (`user_microservice/docker-compose.yml`):**

	 ```yaml
	 version: '3'

	 services:
		 user-service:
			 build:
				 context: ./user_microservice
			 ports:
				 - "8000:8000"
			 networks:
				 - mynetwork
			 depends_on:
				 - rabbitmq

		 rabbitmq:
			 image: "rabbitmq:3-management"
			 ports:
				 - "5672:5672"
				 - "15672:15672"
			 networks:
				 - mynetwork

	 networks:
		 mynetwork:
	 ```

2. **Order Microservice (`order_microservice/docker-compose.yml`):**

	 ```yaml
	 version: '3'

	 services:
		 order-service:
			 build:
				 context: ./order_microservice
			 ports:
				 - "8001:8001"
			 networks:
				 - mynetwork
			 depends_on:
				 - rabbitmq

		 rabbitmq:
			 image: "rabbitmq:3-management"
			 ports:
				 - "5672:5672"
				 - "15672:15672"
			 networks:
				 - mynetwork

	 networks:
		 mynetwork:
	 ```

3. **Web Service (`web_service/docker-compose.yml`):**

	 ```yaml
	 version: '3'

	 services:
		 web-service:
			 build:
				 context: ./web_service
			 ports:
				 - "8080:8080"
			 networks:
				 - mynetwork
			 depends_on:
				 - user-service
				 - order-service

	 networks:
		 mynetwork:
	 ```

### Dockerfiles for Microservices:

1. **User Microservice (`user_microservice/Dockerfile`):**

	 ```Dockerfile
	 FROM python:3.9

	 WORKDIR /app

	 COPY requirements.txt .
	 RUN pip install --no-cache-dir -r requirements.txt

	 COPY . .

	 CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
	 ```

2. **Order Microservice (`order_microservice/Dockerfile`):**

	 ```Dockerfile
	 FROM python:3.9

	 WORKDIR /app

	 COPY requirements.txt .
	 RUN pip install --no-cache-dir -r requirements.txt

	 COPY . .

	 CMD ["python", "manage.py", "runserver", "0.0.0.0:8001"]
	 ```

3. **Web Service (`web_service/Dockerfile`):**

	 ```Dockerfile
	 FROM python:3.9

	 WORKDIR /app

	 COPY requirements.txt .
	 RUN pip install --no-cache-dir -r requirements.txt

	 COPY . .

	 CMD ["python", "manage.py", "runserver", "0.0.0.0:8080"]
	 ```

### Running the Services:

1. Build the Docker images:

	 ```bash
	 # In user_microservice directory
	 docker-compose build

	 # In order_microservice directory
	 docker-compose build

	 # In web_service directory
	 docker-compose build
	 ```

2. Initialize Docker Swarm:

	 ```bash
	 docker swarm init
	 ```

3. Deploy the services to the Swarm:

	 ```bash
	 # In user_microservice directory
	 docker stack deploy -c docker-compose.yml user-service

	 # In order_microservice directory
	 docker stack deploy -c docker-compose.yml order-service

	 # In web_service directory
	 docker stack deploy -c docker-compose.yml web-service
	 ```

4. Access the services:

	- User Microservice: http://localhost:8000
	- Order Microservice: http://localhost:8001
	- Web Service: http://localhost:8080

### Scaling Microservices:

You can easily scale microservices within the Swarm:

```bash
# Scale user-service to 3 replicas
docker service scale user-service_user-service=3

# Scale order-service to 3 replicas
docker service scale order-service_order-service=3
```

This example demonstrates a basic setup of Docker Swarm for orchestrating two microservices and a web service. Adjust the configurations, network settings, and dependencies based on your specific requirements and project structure.
