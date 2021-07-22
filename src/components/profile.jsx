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
        <header class="navbar navbar-expand-lg" className="header">
        <Row>
          <Col xs={6}>
            <p className="greeting">Hola: {user}</p>
          </Col>
          <Col xs={6}>
            <img src={logo} className="logoHeader my-2" rel="preload" alt="logo"/>
          </Col>
        </Row>
        </header>
      <Row>
        <Col md ={6} xs={12} class="skillsTable">
          <div>
            <ResumeSkills />
          </div>
        </Col>
        <Col md ={6} xs={12}>
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