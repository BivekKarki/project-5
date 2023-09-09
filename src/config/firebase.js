// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArkWfeTkHhqtZYF5rDQv8nO0mSrZeh7mI",
  authDomain: "vite-contact-3a8d4.firebaseapp.com",
  projectId: "vite-contact-3a8d4",
  storageBucket: "vite-contact-3a8d4.appspot.com",
  messagingSenderId: "205953885637",
  appId: "1:205953885637:web:3743bb57580f10f9a517ac"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 