import logo from './logo.svg';
import './App.css';
import firebase from "firebase/app";

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
