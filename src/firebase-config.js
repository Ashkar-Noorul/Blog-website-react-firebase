// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjnz9PU5N5OnwIoa33eorDucXqQB0B3sQ",
  authDomain: "blogproject-adbc2.firebaseapp.com",
  projectId: "blogproject-adbc2",
  storageBucket: "blogproject-adbc2.appspot.com",
  messagingSenderId: "874180484654",
  appId: "1:874180484654:web:9fd21c822c9195e63909bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();