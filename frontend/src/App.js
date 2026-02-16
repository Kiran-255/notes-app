import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Register from "./components/Register"
import Login from "./components/Login"
import Home from "./pages/Home"
import ProtectedRoute from "./components/ProtectedRoutes"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

      
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

      </Routes>
    </Router>
  )
}
export default App