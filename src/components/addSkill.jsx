import React from 'react';
import "firebase/firestore";
import { useFirebaseApp } from 'reactfire';
import { useState, useEffect } from 'react';
import { Modal, Button, Container, Col, Row, Card, ListGroup, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import '../style/addSkill.css';
/*import {XLg} from 'react-bootstrap-icons';
<XLg/>*/


function MyVerticallyCenteredModal(props) {
  const [newArray, setNewArray] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const firebase = useFirebaseApp();
  const user = firebase.auth().currentUser.email;
  const db = firebase.firestore();

  const eventSelectedSkill = (skill) => {
    return () => {
      setSelectedSkill(skill);
    }
  }

  const editLevelSkills = (selectedSkill, formLabel) => {
    db.collection('users').where('user.email', '==', user).get().then((querySnapshot) => {
      let saveUserId;
      querySnapshot.forEach((doc) => {
        saveUserId = doc.id;
      })

      const editSkill = db.collection('users').doc(saveUserId);
      return editSkill.update({
        [selectedSkill]: "Básico",
      })
        .then(() => {
          console.log('Document successfully updated!');
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error('Error updating document: ', error);
        });
    });
  };

  useEffect(() => {
    db.collection('users').where('user.email', '==', user).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const userData = doc.data().user;
        const keysArray = Object.keys(userData);
        const tempArray = []
        keysArray.forEach((element) => {
          if (userData[element] === "Nulo" && element !== "employer_name" && element !== "name" && element !== "email" && element !== "id" && element !== "undefined") {
            tempArray.push([element]);
          }
        })
        setNewArray(tempArray);
      });
    });
  }, [user]);

  console.log(newArray);

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Añadir aptitudes
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Container>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Header>Aptitud Nueva</Card.Header>
                <ListGroup variant="flush">
                  {newArray.map((element) => <ListGroup.Item className={"selected-skill"} onClick={eventSelectedSkill(element)}>{element}</ListGroup.Item>)}
                </ListGroup>
              </Card>
            </Col>
            <Col>
              <fieldset>
                <h1>{selectedSkill}</h1>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label as="legend" column sm={2}>
                    Nivel
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Check
                      type="radio"
                      label="Básico"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                    />
                    <Form.Check
                      type="radio"
                      label="Regular"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                    />
                    <Form.Check
                      type="radio"
                      label="Bueno"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios3"
                    />
                    <Form.Check
                      type="radio"
                      label="Excelente"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios3"
                    />
                  </Col>
                </Form.Group>
              </fieldset>
            </Col>
          </Row>
        </Container>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={editLevelSkills(selectedSkill, Form.Check.Label)}>Guardar y enviar a evaluación</Button>
      </Modal.Footer>
      
    </Modal>
  );
}

function AddSkill() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Añadir aptitud nueva
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default AddSkill;