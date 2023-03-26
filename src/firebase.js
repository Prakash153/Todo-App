// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1vsnt284V3GT2IXiQBW_tE4UqlmKMIz4",
  authDomain: "todo-list-71685.firebaseapp.com",
  projectId: "todo-list-71685",
  storageBucket: "todo-list-71685.appspot.com",
  messagingSenderId: "21748803626",
  appId: "1:21748803626:web:46475dba1188c37895bb53",
  measurementId: "G-PGPM5FPHSK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
