// Import Firebase SDK from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTsBQGPCshPJU83FJLrZNSPiUXx98h6js",
  authDomain: "bug-tracker-e606b.firebaseapp.com",
  projectId: "bug-tracker-e606b",
  storageBucket: "bug-tracker-e606b.appspot.com",
  messagingSenderId: "907531647590",
  appId: "1:907531647590:web:8ad327917acfeeb1614ba7",
  measurementId: "G-94ECXFN7E7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

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

    if (!emailSignUp || !passwordSignUp) {
      alert("Please enter a valid email and password.");
      return;
    }

    createUserWithEmailAndPassword(auth, emailSignUp, passwordSignUp)
      .then((userCredential) => {
        console.log("Signup Successful", userCredential.user);
        alert("Signup Successful!");
      })
      .catch((error) => {
        console.error("Signup Failed:", error.message);
        alert(error.message);
      });
  });

  // Login button event listener
  submitLogin.addEventListener("click", function (event) {
    event.preventDefault();

    const emailLogin = document.getElementById("login-email").value;
    const passwordLogin = document.getElementById("login-password").value;

    if (!emailLogin || !passwordLogin) {
      alert("Please enter a valid email and password.");
      return;
    }

    signInWithEmailAndPassword(auth, emailLogin, passwordLogin)
      .then((userCredential) => {
        console.log("Login Successful", userCredential.user);
        alert("Login Successful!");
      })
      .catch((error) => {
        console.error("Login Failed:", error.message);
        alert(error.message);
      });
  });

  console.log("Event listeners attached.");
};
