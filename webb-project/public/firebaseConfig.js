import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAuDKaGo00gCD4rd2jJc0DKfpSye6dqfW8",
    authDomain: "webb-project-b7d05.firebaseapp.com",
    databaseURL: "https://webb-project-b7d05-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "webb-project-b7d05",
    storageBucket: "webb-project-b7d05.appspot.com",
    messagingSenderId: "934623106672",
    appId: "1:934623106672:web:173a129d09666917fd06b5",
    measurementId: "G-H6G4N32XH7"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth()
  const db = getFirestore()


  //html elements
  const loginForm = document.getElementById("loginForm")
  //very code
  loginForm.addEventListener("submit", (e)=>{
      e.preventDefault()
      signInWithEmailAndPassword(auth, e.target.email.value, e.target.password.value)
      .then((cred)=>{
        return cred.user.getIdToken()
      }).then((token)=>{
        document.cookie = `Bearer ${token}`
        window.location.href = "/profile"
      })
      .catch((err)=>{
        if(err)throw err
      })
  })

