// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTsBQGPCshPJU83FJLrZNSPiUXx98h6js",
  authDomain: "bug-tracker-e606b.firebaseapp.com",
  projectId: "bug-tracker-e606b",
  storageBucket: "bug-tracker-e606b.firebasestorage.app",
  messagingSenderId: "907531647590",
  appId: "1:907531647590:web:8ad327917acfeeb1614ba7",
  measurementId: "G-94ECXFN7E7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { app, auth };