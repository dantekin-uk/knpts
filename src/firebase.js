// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARo0MTeaQSO0W_HxDJ20kYjPk6agEY07s",
  authDomain: "summit-e1b9b.firebaseapp.com",
  projectId: "summit-e1b9b",
  storageBucket: "summit-e1b9b.firebasestorage.app",
  messagingSenderId: "1016894555256",
  appId: "1:1016894555256:web:b2644d42dcaea18dec998d",
  measurementId: "G-TQS48WF4X9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };