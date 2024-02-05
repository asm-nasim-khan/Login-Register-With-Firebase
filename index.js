 // Import the functions you need from the SDKs you need

 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

 // TODO: Add SDKs for Firebase products that you want to use

 // https://firebase.google.com/docs/web/setup#available-libraries


 // Your web app's Firebase configuration

 const firebaseConfig = {

   apiKey: "AIzaSyCbYcIYOZYmSD7_jhR5CAQeBT71oqklofU",

   authDomain: "dmnasim-dc2c7.firebaseapp.com",

   projectId: "dmnasim-dc2c7",

   storageBucket: "dmnasim-dc2c7.appspot.com",

   messagingSenderId: "1057001291455",

   appId: "1:1057001291455:web:b85303955781b7bebf100a"

 };


 // Initialize Firebase

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const database = firebase.database()

function register(){
    email = document.getElementById('username').value
    pass = document.getElementById('password').value
    auth.createUserWithEmailAndPassword(email,pass)
    .then(function(){
        var user = auth.currentUser

        var database_ref = database.ref()
        var user_data = {
            email : email,
            last_login : Date.now()
        }
        database_ref.child('users/'+user.uid).set(user_data)

        alert('User Creater!!')

    })
    .catch( function(){

    })

}
