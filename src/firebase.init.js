// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA3jaci6-_ipQi56GFEloXAKX3pu_mJ4E",
  authDomain: "assignment-11-client-ff819.firebaseapp.com",
  projectId: "assignment-11-client-ff819",
  storageBucket: "assignment-11-client-ff819.appspot.com",
  messagingSenderId: "1017686021843",
  appId: "1:1017686021843:web:b3879760aa5cd8e8942626",
  measurementId: "G-T7S29HSDW9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;