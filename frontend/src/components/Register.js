import { useState, useEffect } from "react"
import { registerUser } from "../services/authService"
import { useNavigate } from "react-router-dom"
import InputField from "./InputField"

function Register() {
  const [formData, setFormData] = useState({
 name: "",
    email: "",
    password: "",
  })
  const [message, setMessage] = useState("")
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      navigate("/home")
    }
  }, [navigate])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
  e.preventDefault()
    setMessage("")

    try {
      const data = await registerUser(formData)

      if (data.token) {
        localStorage.setItem("token", data.token)
        navigate("/home")
      } else {
        setMessage(data.message || "Registration failed")
      }
    } 
    catch {
      setMessage("Server error")
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
  <div className="bg-blue-100/50 shadow-lg rounded-2xl p-8 w-full max-w-md">
       
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
  <InputField
            label="Full Name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

     <InputField
        label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <InputField
            label="Password"
            name="password"
           type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required  />

          <button type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200" >Register </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-red-500 text-sm">{message}</p>
        )}

        <p className="text-sm text-center mt-6 text-gray-600">
      Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 cursor-pointer hover:underline font-medium">  Login </span>
        </p>
      </div>
    </div>
  )
}

export default Register