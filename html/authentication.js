
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword , onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyBzBABPMcjhZ7KFKpnhk3B6zmPFt9j-lFM",
    authDomain: "rkss-admin-webapp.firebaseapp.com",
    projectId: "rkss-admin-webapp",
    storageBucket: "rkss-admin-webapp.appspot.com",
    messagingSenderId: "133651595077",
    appId: "1:133651595077:web:f76779d4dbfdd5015dc82c",
    measurementId: "G-7KW27MZXYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const form = document.getElementById("registerForm")
const formarea = document.getElementById("form-area")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const name = form.name.value
    const lastname = form.lastname.value
    const email = form.email.value
    const password = form.password.value
    // const confirmpassword = form.confirmpassword.value  
    createUserWithEmailAndPassword(auth,email,password)
    .then((result)=>{
        alert("ลงทะเบียนบัญชีผู้ใช้สำเร็จ")

    }).catch((error)=>{
        alert(error.message)
    })
})

onAuthStateChanged
