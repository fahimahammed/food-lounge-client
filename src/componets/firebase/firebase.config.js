// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2EqhfyDNBNKx0HBsBexYgpCFhbkztYt8",
  authDomain: "food-lounge-auth.firebaseapp.com",
  projectId: "food-lounge-auth",
  storageBucket: "food-lounge-auth.appspot.com",
  messagingSenderId: "162507253800",
  appId: "1:162507253800:web:cdb1a7f04796770382ed1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;