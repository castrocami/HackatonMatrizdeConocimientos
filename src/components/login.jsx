import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';
import logo from '../images/logoEverisVerde.png';
import '../style/login.css';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const firebase = useFirebaseApp();

  const submit = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        history.push('/profile')
      })
      .catch((error) => {
        alert('Correo electrónico o contraseña inválido');
      });
  }
  let history = useHistory();

  return (
    <div className="login">
      <img src={logo} width="400px" className="logo" alt="logo" />
      <input type="email" id="mail" className="textInput" placeholder="Usuario" onChange={(e => setEmail(e.target.value))} />
      <input type="password" id="pass" className="textInput" placeholder="Contraseña" onChange={(e => setPassword(e.target.value))} />
      <button className="btnLogin" onClick={submit}>Ingresar</button>
    </div>
  )
}

export default Login;
