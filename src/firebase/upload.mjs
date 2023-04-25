import MOCK_DATA from '../data/MOCK_DATA.json' assert {type: "json"}
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"

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
const db = getFirestore(app)
const productosRef = collection(db, 'productos')

MOCK_DATA.forEach((item) => {
    delete item.id

    addDoc(productosRef, item)
})