// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGUlJg1039OLvx6h2RjOLBfubmy5Sm5Ys",
  authDomain: "tienda-cocina.firebaseapp.com",
  projectId: "tienda-cocina",
  storageBucket: "tienda-cocina.appspot.com",
  messagingSenderId: "148122128926",
  appId: "1:148122128926:web:92b26348b377ea7531940f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);