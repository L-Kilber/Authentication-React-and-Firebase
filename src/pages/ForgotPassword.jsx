import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../context/authContext"

export default function ForgotPassword() {

  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState("false")
  const {recoverPassword} = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading("true")

    try {
      await recoverPassword(email)
      alert("A password recovery email has been sent.")
      navigate("/login")
    } catch (error) {
      alert(error.message)
    }

    setLoading("false")
  }

  return (
    <div className="container">
      <h1>Fogot Password</h1>

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button className="button-block">Recover Password</button>
      </form>

      <div className="center">
        <div>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  )
}