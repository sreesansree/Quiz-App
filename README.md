# Quiz App Backend

This project is a RESTful API backend for an online quiz application. It allows users to take quizzes, submit answers, and retrieve results. The backend is built using Node.js, Express.js, MongoDB, and JWT for authentication.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Business Logic](#business-logic)

## Features

- CRUD operations on quizzes and questions
- User authentication with JWT
- Calculate quiz scores based on user responses
- Provide feedback on correct/incorrect answers

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- dotenv
- uuid

## Installation
1. Clone the repository:
  - git clone https://github.com/sreesansree/Quiz-App.git
  - cd quiz-app-backend
   
2 . Install dependencies:
  - npm install
     
3. Create a .env file in the root directory and add the following environment variables:
   - PORT=5000
   - MONGO_URI=your_mongodb_connection_string
   - JWT_SECRET=your_jwt_secret
   
4.Start the server:
  - npm run dev

## Usage 
You can use Postman or Insomnia to test the API endpoints. Below are the available endpoints and their usage.

## API Endpoints  
## Authentication :
     - Register : 
         -  POST /api/auth/register
          - Body: { "username": "example", "password": "password" }
     - Login : 
       - POST /api/auth/login
       - Body: { "username": "example", "password": "password" }
 ## Quizzes : 
    - Create Quiz :
       - POST /api/quizzes
       - Headers: { "Authorization": "Bearer <token>" }
       -  Body :
       {
     "title": "Math Quiz",
     "description": "Test your basic math skills",
     "questions": [
    {
      "question": "What is 2 + 2?",
      "options": ["3", "4", "5", "6"],
      "correctAnswer": "4",
      "marks": 5
    },
    {
      "question": "What is 5 * 3?",
      "options": ["10", "15", "20", "25"],
      "correctAnswer": "15",
      "marks": 10
    }
    ],
    "totalMarks": 15
    }
    - Get All Quizzes :
      -  GET /api/quizzes
     -  Headers: { "Authorization": "Bearer <token>" }  
    - Get Quiz by ID : 
      - GET /api/quizzes/:id
      - Headers: { "Authorization": "Bearer <token>" }
    - Update Quiz :
       - PUT /api/quizzes/:id
      - Headers: { "Authorization": "Bearer <token>" }
      - Body :
       {
    "title": "Updated Math Quiz",
    "description": "Test your basic math skills with updated questions",
    "questions": [
    {
      "question": "What is 2 + 3?",
      "options": ["4", "5", "6", "7"],
      "correctAnswer": "5",
      "marks": 5
    },
    {
      "question": "What is 7 * 3?",
      "options": ["18", "21", "24", "27"],
      "correctAnswer": "21",
      "marks": 10
    }
    ],
    "totalMarks": 15
    }
    - Delete Quiz :
     - DELETE /api/quizzes/:id
     - Headers: { "Authorization": "Bearer <token>" }


## Submissions
    - Submit Quiz:
       - POST /api/quizzes/:id/submit
       - Headers: { "Authorization": "Bearer <token>" }
      
       - Body : 
          {
          "answers": ["4", "15"]
          }
          
     -Response : {
       "score": 15,
       "totalMarks": 15,
       "feedback": [
    {
      "question": "What is 2 + 2?",
      "correctAnswer": "4",
      "userAnswer": "4",
      "isCorrect": true
    },
    {
      "question": "What is 5 * 3?",
      "correctAnswer": "15",
      "userAnswer": "15",
      "isCorrect": true
    }
     ] 
    }

## Authentication 
The API uses JWT for authentication. Users need to register and log in to receive a token. This token must be included in the Authorization header for all protected routes.

## Business Logic
The business logic for calculating quiz scores and providing feedback is implemented in the submitQuiz controller.


