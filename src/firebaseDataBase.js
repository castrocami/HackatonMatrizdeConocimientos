// https://medium.com/lucas-moyer/how-to-import-json-data-into-firestore-2b370486b622
const firebase = require("firebase");

// Required for side-effects
require("firebase/firestore");  

// https://firebase.google.com/docs/web/setup?authuser=0
const firebaseConfig = {
    apiKey: "AIzaSyC3karrBdqmSf_LCSUrOSjkDe8pW6dhNoQ",
    authDomain: "matriz-de-conocimientos.firebaseapp.com",
    projectId: "matriz-de-conocimientos",
    storageBucket: "matriz-de-conocimientos.appspot.com",
    messagingSenderId: "617798514262",
    appId: "1:617798514262:web:3daf80159d359aaf562df7"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// https://stackoverflow.com/questions/7163061/is-there-a-require-for-json-in-node-js
const usersObject = require('./data_n.json')


usersObject.users.forEach(function(user) {
    db.collection("users").add({
        user,
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});