// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// const dotenv = require("dotenv");
// dotenv.config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMn57--of9PpQoiYMdk5Riu5glPMmXz2o",
  authDomain: "richpanel-49569.firebaseapp.com",
  projectId: "richpanel-49569",
  storageBucket: "richpanel-49569.appspot.com",
  messagingSenderId: "911917897126",
  appId: "1:911917897126:web:90947496c801c667cf2b67",
  measurementId: "G-0E3J3E9VVL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
