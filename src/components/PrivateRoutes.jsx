import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext"

export default function ProtectedRoute({children}) {
    const {currentUser} = useAuth()

    if (!currentUser) {
        return <Navigate to="/login" replace />
        //Replace substitui qualquer rota pela rota de login (nesse caso)
    }

    return children
}