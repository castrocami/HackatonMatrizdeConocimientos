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
  apiKey: "AIzaSyC3karrBdqmSf_LCSUrOSjkDe8pW6dhNoQ",
  authDomain: "matriz-de-conocimientos.firebaseapp.com",
  projectId: "matriz-de-conocimientos",
  storageBucket: "matriz-de-conocimientos.appspot.com",
  messagingSenderId: "617798514262",
  appId: "1:617798514262:web:3daf80159d359aaf562df7"
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
