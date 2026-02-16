Notes App
Description

A secure, full-stack Notes application built with the MERN stack. Users can register, authenticate, and manage personal notes.

Features
JWT-based authentication
User registration & login
Protected routes
Create / Read / Update / Delete notes
User-specific data isolation
Password hashing with bcrypt
Persistent cloud database (MongoDB Atlas)
Responsive UI with Tailwind CSS

Tech Stack

Frontend
React
React Router DOM
Tailwind CSS

Backend
Node.js
Express.js
MongoDB Atlas
Mongoose
JWT
bcrypt

Authentication
Secure password hashing (bcrypt)
JWT token generation on login
Token verification via middleware
Protected API endpoints

Database
Cloud-hosted MongoDB Atlas
Mongoose ODM for schema modeling
Secure environment-based connection

Project Structure
client → React frontend
server
config → Database configuration
models → Mongoose schemas
routes → API routes
controllers → Business logic
middleware → Authentication & error handling

Future Improvements
Token refresh system
User profile management
Note categories & search