// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzRhuvjwKafkdsaSzb38H-LOp1ijaAW9I",
  authDomain: "auth-7f4b0.firebaseapp.com",
  projectId: "auth-7f4b0",
  storageBucket: "auth-7f4b0.appspot.com",
  messagingSenderId: "820335785967",
  appId: "1:820335785967:web:6d12af5910cde90e3da81a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);