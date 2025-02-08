// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase Configuration
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

// Ensure DOM is fully loaded
window.onload = function () {
  console.log("Page loaded, attaching event listeners...");

  const submitLogin = document.getElementById("login-submit");
  const submitSignUp = document.getElementById("signup-submit");

  if (!submitLogin || !submitSignUp) {
    console.error("Buttons not found. Check your HTML element IDs.");
    return;
  }

  // Signup button event listener
  submitSignUp.addEventListener("click", function (event) {
    event.preventDefault();

    const signUpName = document.getElementById("signup-name").value;
    const emailSignUp = document.getElementById("signup-email").value;
    const passwordSignUp = document.getElementById("signup-password").value;

    console.log("Signup Attempt:", signUpName, emailSignUp, passwordSignUp);
    alert("Signup clicked!");
  });

  // Login button event listener
  submitLogin.addEventListener("click", function (event) {
    event.preventDefault();

    const emailLogin = document.getElementById("login-email").value;
    const passwordLogin = document.getElementById("login-password").value;

    console.log("Login Attempt:", emailLogin, passwordLogin);
    alert("Login clicked!");
  });

  console.log("Event listeners attached.");
};
