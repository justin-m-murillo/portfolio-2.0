// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApuQyrafClBU_Lu2OAvokUaeuFyRT7zQA",
  authDomain: "portfolio-98f55.firebaseapp.com",
  projectId: "portfolio-98f55",
  storageBucket: "portfolio-98f55.appspot.com",
  messagingSenderId: "152278481855",
  appId: "1:152278481855:web:9d8039399191e529623f0a",
  measurementId: "G-T90EWLLNH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);