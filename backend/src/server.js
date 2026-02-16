const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const cors = require ("cors")
const authRoutes = require("./routes/authRoutes")
const noteRoutes = require("./routes/noteRoutes")

dotenv.config()
connectDB()

const app = express()
app.use(cors())

app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/notes", noteRoutes)
app.get("/", (req, res) => {
  res.send("API running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})