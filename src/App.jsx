import { useState } from 'react'
import './App.css'
import AuthProvider from './context/authContext'

import Signup from './pages/Signup.jsx'
import UserProfile from './pages/UserProfile.jsx'
import Login from './pages/Login.jsx'
import UpdateProfile from './pages/UpdateProfile'
import ForgotPassword from './pages/ForgotPassword'
import ProtectedRoute from './components/PrivateRoutes'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="update-profile" element={<ProtectedRoute><UpdateProfile /></ProtectedRoute>}/>
            <Route path="/" element={<ProtectedRoute><UserProfile /></ProtectedRoute>}/>
            <Route path="/forgot-password" element={<ForgotPassword />}/>
            <Route path="*" element={<div><h1>Not found</h1></div>}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
  )
}

export default App
