import { useAuth } from "../context/authContext"
import { useNavigate, Link } from "react-router-dom"

export default function UserProfile() {

  const { currentUser, logOut } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    try {
      await logOut()
      navigate("/login")
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Profile</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Email:{currentUser.email}</td>
            <td>
              <Link to="update-profile">Update Profile</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}