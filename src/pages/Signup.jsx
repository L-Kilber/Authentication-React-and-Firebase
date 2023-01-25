import { useState } from "react"
import { useAuth } from "../context/authContext"

export default function Signup() {
  const {signUp} = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState("false")

  async function handleSubmit(e) { //the function signup is a promise, so need to be asynchronous
    e.preventDefault()

    setLoading("true")

    if (password.length < 6) {
      alert("Password must be at least 6 characters")
      return
    }
    if (confirmPassword != password) {
      alert("Passwords do not match")
      return
    }

    try {
      await signUp(email, password)
    } catch (error) {
      alert(error.message)
    }

    setLoading("false")
  }

  return (
    <div className="container">
      <h2>Signup</h2>

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

        <label>Password Confirmation</label>
        <input type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button disable={loading} className="button-block" type="submit">Signup</button>
      </form>

    </div>
  )
}