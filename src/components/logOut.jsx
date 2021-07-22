import React from 'react';
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';
import { useHistory } from 'react-router-dom';

const LogOutBtn = props => {
  const firebase = useFirebaseApp();
  let history = useHistory();

  const logOut = () => {
      firebase.auth().signOut()
        .then(() => {
          history.push('/')
          alert('Sesión cerrada')
        })
        .catch((error) => {
          alert('Imposible cerrar sesión, intente nuevamente');
        });
    }

  return (
      <div>
         <button className="logOut" onClick={logOut}>Cerrar Sesión</button>
      </div>
  );
};

export default LogOutBtn