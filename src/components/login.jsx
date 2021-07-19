import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';
import logo from '../images/logoEverisVerde.png';
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
      <span>Usuario</span>
      <input type="email" id="mail" onChange={(e => setEmail(e.target.value))} />
      <span>Contraseña</span>
      <input type="password" id="pass" onChange={(e => setPassword(e.target.value))} />
      <button onClick={submit} to="/OrderName">Ingresar</button>
    </div>
  )
}
export default Login;