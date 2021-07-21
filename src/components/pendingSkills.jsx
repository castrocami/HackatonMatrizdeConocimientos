import React, { useState } from "react";
import { Modal, Button, Table, Form, Row, Col } from "react-bootstrap";

function ValidateUserSkills(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Usuario 1</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group as={Row} className="mb-3">
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Angular - Básico"
              value="Básico"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="Github - Regular"
              value="Regular"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="Jira - Bueno"
              value="Bueno"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
            <Form.Check
              type="radio"
              label="Unity - Excelente"
              value="Excelente"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Col>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Validar</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Aptitudes por confirmar
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan="3">Colaboradores:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td onClick={() => setModalShow(true)}>Usuario 1</td>
              <ValidateUserSkills
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
              <td>Usuario 2</td>
              <td>Usuario 3</td>
            </tr>
            <tr>
              <td>Usuario 4</td>
              <td>Usuario 5</td>
              <td>Usuario 6</td>
            </tr>
            <tr>
              <td>Usuario 7</td>
              <td>Usuario 8</td>
              <td>Usuario 9</td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

const PendingSkills = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Ver pendientes
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default PendingSkills;
