# Distributed Systems Lab

# Installing and running this project
To start the application follow these steps:
1. Navigate to the backend folder and run `docker build -t backend .` to build the backend image.
2. Start the backend container by running `docker run -p 3001:3001 backend` in the same directory.
3. Navigate to the frontend folder and run `docker build -t frontend .` to build the frontend image.
4. Start the frontend container by running `docker run -p 3000:3000 frontend` in the same directory.
5. Open http://localhost:3000/

## API
The API is located at http://localhost:3001/api
