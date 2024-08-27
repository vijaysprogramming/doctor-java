// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuWFtKautGJ65xm_DBgygkjpOuQ-k12mo",
  authDomain: "dj-login-sign-up.firebaseapp.com",
  projectId: "dj-login-sign-up",
  storageBucket: "dj-login-sign-up.appspot.com",
  messagingSenderId: "1002406869786",
  appId: "1:1002406869786:web:8b477a096fbc9da3a1caa3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



//submit button
const submit = document.getElementById('submit')
submit.addEventListener("click", function(event)
{
    event.preventDefault()

    //inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("creating user...")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
})
