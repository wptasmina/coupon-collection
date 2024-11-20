// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCKCCa0R7TSFfzeJfbwf0nqS_m1U-DVb8",
  authDomain: "discounts-offer.firebaseapp.com",
  projectId: "discounts-offer",
  storageBucket: "discounts-offer.firebasestorage.app",
  messagingSenderId: "1071267272797",
  appId: "1:1071267272797:web:80e9f3fbf9fe398cd855b4",
  measurementId: "G-GKX66XT5N8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth
