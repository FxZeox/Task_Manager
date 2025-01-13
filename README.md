#  Task Manager (MERN) - Login & Signup

## Overview
This app is a Task Manager built with the MERN stack (MongoDB, Express, React, Node.js) to help manage tasks efficiently. 
It provides login and signup functionality, redirecting users to the dashboard upon successful authentication, and Remaining phases will be implemet latar.

## Server Setup

     1. Environment Variables
    Create a `.env` file in the `server` folder with the following variables:
  ```
MONGODB_URI=mongodb+srv://your_mongo_connection_url
JWT_SECRET=your_jwt_secret_key
PORT=8800
NODE_ENV=development
 2. Install Dependencies & Run Server

cd server
npm install
npm start

The server should now be running and connected to the database.
Client Setup
1. Environment Variables

Create a .env file in the client folder:

VITE_APP_BASE_URL=http://localhost:8800

2. Install Dependencies & Run Client

cd client
npm install
npm start

The app will run on http://localhost:3000.
Authentication Flow
Signup

    Endpoint: POST /api/auth/signup
    Request:

    { "email": "user@example.com", "password": "your_password" }

Login

    Endpoint: POST /api/auth/login
    Request:

    { "email": "user@example.com", "password": "your_password" }

Redirect to Dashboard

After successful login, users are redirected to the dashboard.
Folder Structure

├── client/          # React frontend
├── server/          # Node.js backend
├── .env             # Environment variables
└── README.md        # This file
