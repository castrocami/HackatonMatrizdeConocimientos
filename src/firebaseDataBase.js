// https://medium.com/lucas-moyer/how-to-import-json-data-into-firestore-2b370486b622
const firebase = require("firebase");

// Required for side-effects
require("firebase/firestore");  

// https://firebase.google.com/docs/web/setup?authuser=0
const firebaseConfig = {
    apiKey: "AIzaSyDrsI5Bs_umqYQ7wJpac_elFrt6sGrbIyE",
    authDomain: "matriz-conocimientos2.firebaseapp.com",
    projectId: "matriz-conocimientos2",
    storageBucket: "matriz-conocimientos2.appspot.com",
    messagingSenderId: "496649347432",
    appId: "1:496649347432:web:f834f060f91659a43836dd"
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