import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3xS7-8QNVr3eAdDQC6CICRlquLk-KEiQ",
  authDomain: "react-51155.firebaseapp.com",
  projectId: "react-51155",
  storageBucket: "react-51155.appspot.com",
  messagingSenderId: "78686246458",
  appId: "1:78686246458:web:bf1425dae5aafa3301c703"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
