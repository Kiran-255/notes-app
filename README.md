📝 Notes App (MERN Stack)

Simple full-stack Notes application with authentication.
Users can register, login, and manage personal notes.

🚀 Tech Stack

Frontend

React

React Router

Tailwind CSS

Backend

Node.js

Express.js

MongoDB Atlas

Mongoose

JWT Authentication

bcrypt

🔐 Features

User Registration

User Login (JWT authentication)

Protected Routes

Create Notes

Read Notes

Update Notes

Delete Notes

User-specific data isolation

🗂️ Project Structure
client/        → React frontend
server/
  ├── config/  → DB connection
  ├── models/  → Mongoose schemas
  ├── routes/  → API routes
  ├── controllers/
  ├── middleware/

🌐 Database

This project uses MongoDB Atlas (cloud database).
Data is stored remotely and accessed via Mongoose using a secure connection string.

🔒 Authentication

Passwords are hashed using bcrypt.

JWT tokens are stored in localStorage.

Protected routes require a valid token.

📌 Future Improvements

Token refresh mechanism

User profile page

Note categories & search

📄 License

MIT License