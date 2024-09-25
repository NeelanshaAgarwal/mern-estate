// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6adee.firebaseapp.com",
  projectId: "mern-estate-6adee",
  storageBucket: "mern-estate-6adee.appspot.com",
  messagingSenderId: "616814422929",
  appId: "1:616814422929:web:69d16f5980fc4c7f4a8830"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);