import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useFirebaseApp } from 'reactfire';
import logo from '../images/logoEverisBlanco.png';
import LogOutBtn from './logOut';

const Profile = props => {
  const firebase = useFirebaseApp();
  const user = firebase.auth().currentUser.email

  return (
    <Container>
      <Row>
        <header>
          <div className="header">
            <img src={logo} className="logo" width="60px" rel="preload" alt="logo"/>
            <p>Bienvenid@: {user}</p>
          </div>
        </header>
      </Row>
      <Row>
        <Col>
          <div>
            <h1>Aquí van las skills</h1>
          </div>
        </Col>
        <Col>
          <div>
            <h1>Aquí van los botones</h1>
            <LogOutBtn />
          </div>
        </Col>
      </Row>
    </Container>
  );
};


export default Profile;