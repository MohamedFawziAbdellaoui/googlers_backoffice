# Multi-container Development Environment with Docker Compose

This project sets up a development environment using Docker Compose, consisting of two containers:

🚀 **NestJS API**: This container houses your NestJS backend application.

🎨 **Next.js Frontend**: This container houses your Next.js frontend application.

## Prerequisites

- Docker installed and running on your system.
- Node.js and npm installed on your system.

## Getting Started

1. Clone this repository.
2. Navigate to the project directory.
3. Build the ENV image:
   ```bash
     docker-compose up --build
   ```
## Accessing the Applications
- **NestJS API**: The API is accessible on port `3000` of the host machine. You can access the Swagger documentation at [http://localhost:8080/api/swagger](http://localhost:8080/api/swagger).
- **Next.js Frontend**: The frontend is accessible on port `3001` of the host machine. You can access the application at [http://localhost:3001](http://localhost:3001).
## Stopping the containers : 
  ```bash
    docker-compose down
  ```
## Environment Variables
  You can configure environment variables for both applications by creating a .env file in the project root directory. The .env file will be automatically loaded by Docker Compose.
## Developing
  You can develop your applications directly within their respective containers. Changes made to the source code will be automatically reflected in the running applications.
