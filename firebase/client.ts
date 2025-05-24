// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdHlxQpjw6iRJDg26vgCHqUzTR2DUoNwQ",
  authDomain: "prepai-9cd79.firebaseapp.com",
  projectId: "prepai-9cd79",
  storageBucket: "prepai-9cd79.firebasestorage.app",
  messagingSenderId: "838797525029",
  appId: "1:838797525029:web:60fe1ab8d0126db4b2ffcc",
  measurementId: "G-Y01CQVK75J",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
