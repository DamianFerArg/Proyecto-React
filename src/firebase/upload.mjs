import MOCK_DATA from '../data/MOCK_DATA.json' assert {type: "json"}
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"

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
const db = getFirestore(app)
const productosRef = collection(db, 'productos')

MOCK_DATA.forEach((item) => {
    delete item.id

    addDoc(productosRef, item)
})