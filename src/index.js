import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
import { FirebaseAppProvider } from 'reactfire';
import "bootstrap/dist/css/bootstrap.min.css";

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

ReactDOM.render((
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
  </FirebaseAppProvider>  
), document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
