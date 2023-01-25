import { useState, useEffect, useContext, createContext } from "react";
import { 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut,
    updateEmail,
    sendPasswordResetEmail
 } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({children}) {
    
    const [currentUser, setCurrentUser] = useState();

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function signIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
        return signOut(auth)
    }

    function updateEmailAdress(newEmail) {
        return updateEmail(currentUser, newEmail)
    }

    function recoverPassword(email) {
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        })
        return unsubscribe
    }, [])

    return (
        <AuthContext.Provider value=
        {{
            signUp,
            signIn,
            logOut,
            currentUser,
            updateEmailAdress,
            recoverPassword
        }}
        >{children}</AuthContext.Provider>
    )
}