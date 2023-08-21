// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-project-c08bd.firebaseapp.com",
  projectId: "auth-project-c08bd",
  storageBucket: "auth-project-c08bd.appspot.com",
  messagingSenderId: "905146470234",
  appId: "1:905146470234:web:aaea3111a2b6fe3db5ad63"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);