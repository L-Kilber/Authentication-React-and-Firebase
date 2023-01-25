import { useState } from "react"
import { useAuth } from "../context/authContext"
import { useNavigate, Link } from "react-router-dom"

export default function Login() {

  const {signIn} = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState("false")
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    setLoading("true")

    if (password.length < 6) {
      alert("Password must be at least 6 characters")
      setLoading("false")
      return
    }

    try {
      await signIn(email, password)
      navigate("/")
    } catch (error) {
      alert(error.message)
    }

    setLoading("false")
  }

  return (
    <div className="container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />

        <button disabled={loading} className="button-block" type="submit">Login</button>
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