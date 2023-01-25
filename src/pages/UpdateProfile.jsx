 import { useState } from "react"
 import { useNavigate } from "react-router-dom"
 import { useAuth } from "../context/authContext"

 export default function UpdateProfile() {

  const {updateEmailAdress, currentUser } = useAuth()
  const [loading, setLoading] = useState("false")
  const [email, setEmail] = useState(currentUser.email)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading("true")

    if (email === currentUser.email) {
      setLoading(false)
      return navigate("/")
    }

    try {
      await updateEmailAdress(email)
      navigate("/")
    } catch (error) {
      alert(error.message)
    }

    setLoading("false")
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Update Profile</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button disable={loading} className="button-block">Update</button>
      </form>
    </div>
  )
 }