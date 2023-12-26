// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR48sRnwAf1ovUurUtzYN3_yeIZv7nNFw",
  authDomain: "time-management-9c765.firebaseapp.com",
  projectId: "time-management-9c765",
  storageBucket: "time-management-9c765.appspot.com",
  messagingSenderId: "300752360011",
  appId: "1:300752360011:web:6faa142062defa133073ce",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
export default app;
