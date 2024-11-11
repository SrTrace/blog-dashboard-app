// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-dashboard-87d80.firebaseapp.com",
  projectId: "blog-dashboard-87d80",
  storageBucket: "blog-dashboard-87d80.firebasestorage.app",
  messagingSenderId: "988251473336",
  appId: "1:988251473336:web:5057667e100808cbf33b4d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);