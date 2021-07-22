import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useFirebaseApp } from 'reactfire';
import logo from '../images/logoEverisBlanco.png';
import LogOutBtn from './logOut';
import ResumeSkills from './resumeSkills';
import AddSkill from './addSkill';
import FilterSkills from './filterSkills';
import PendingSkills from './pendingSkills';
import '../style/profile.css';

const Profile = props => {
  const firebase = useFirebaseApp();
  const user = firebase.auth().currentUser.email

  return (
    <Container className="container">
      <Row>
        <header className="header">
            <p className="greeting">Bienvenid@: {user}</p>
            <img src={logo} className="logoHeader" width="400px" rel="preload" alt="logo"/>
        </header>
      </Row>
      <Row>
        <Col>
          <div>
            <ResumeSkills />
          </div>
        </Col>
        <Col>
          <div className="buttons">
            <AddSkill />
            <FilterSkills />
            <PendingSkills />            
            <LogOutBtn />
          </div>
        </Col>
      </Row>
    </Container>
  );
};


export default Profile;