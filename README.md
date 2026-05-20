# TaskFlow API

A full-stack task management application built using MERN stack.

## Features

- User Registration & Login
- JWT Authentication
- Protected Routes
- Task CRUD APIs
- MongoDB Database
- React Frontend
- Axios API Integration

## Tech Stack

Frontend:
- React
- Vite
- Axios
- React Router DOM

Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs

## Installation

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## API Endpoints

### Auth
- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/me

### Tasks
- POST /api/tasks
- GET /api/tasks
- PUT /api/tasks/:id
- DELETE /api/tasks/:id
