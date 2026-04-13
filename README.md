# Demo-Notable

Demo-Notable is a full-stack learning project built using NestJS for the backend and React with React Router DOM for the frontend.

The goal of this project is to practice and understand backend development with NestJS in depth, improve React skills, and work with real-world concepts like authentication, testing, and CI/CD.

---

# Tech Stack

## Backend
- NestJS
- MongoDB (Mongoose)
- JWT Authentication
- Passport.js
- Jest
- Supertest

## Frontend
- React
- React Router DOM
- Context API
- Axios

## Dev Tools
- Jest (Testing)
- GitHub Actions (CI/CD)

---

# Features

## Authentication
- Register user
- Login user
- Get current user profile using JWT

## Notes System
- Create notes
- Read notes
- Update notes
- Delete notes

---

# Testing

The backend includes end-to-end testing for authentication flows using Jest and Supertest.

Covered endpoints:
- POST /auth/register
- POST /auth/login
- GET /auth/me

---

# CI/CD

The project includes a basic CI pipeline using GitHub Actions that runs tests automatically on every push.

---

# Purpose of the Project

This project is built for learning purposes to:
- Understand NestJS architecture deeply
- Practice React development
- Learn authentication with JWT
- Learn testing in backend applications
- Understand CI/CD workflows

---

# How to run

## Backend
npm install
npm run start:dev

## Frontend
npm install
npm run dev

## Tests
npm run test