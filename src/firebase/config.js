import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEiIMcpm6jughJ26bRoXfMgo-RmFwcEKA",
  authDomain: "react-51155-7e9d9.firebaseapp.com",
  projectId: "react-51155-7e9d9",
  storageBucket: "react-51155-7e9d9.appspot.com",
  messagingSenderId: "293826990874",
  appId: "1:293826990874:web:36fd0e74620f6159af52a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
