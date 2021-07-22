import React from 'react';
import "firebase/firestore";
import { useFirebaseApp } from 'reactfire';
import { Button, Modal, Dropdown, DropdownButton, Table } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import '../style/filterSkills.css';

const FilterSkills = props => {
  const firebase = useFirebaseApp();
  const db = firebase.firestore();
  const [modalShow, setModalShow] = useState(false);
  const [selectedSkill, setselectedSkill] = useState(null);
  const [showName, setShowName] = useState([]);

  const handleSelect = (e) => {
    setselectedSkill(e);
  }

  useEffect(() => {
    let arrayNames = [];
    db.collection('users').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const dataUser = doc.data().user;
        if (dataUser[selectedSkill] !== "Nulo" && selectedSkill !== null) {
          arrayNames.push(dataUser.name);
        }
      });
      setShowName(arrayNames);
    });
  }, [selectedSkill, db])

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        dialogClassName="modal-5000w"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Listado de aptitudes
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DropdownButton onSelect={handleSelect} id="dropdown-basic-button" title="Filtro de búsqueda">
            <div className="scrollDrown">
              <Dropdown.Item eventKey="adobe_analytics">adobe_analytics</Dropdown.Item>
              <Dropdown.Item eventKey="angular" >angular</Dropdown.Item>
              <Dropdown.Item eventKey="arkit" >arkit</Dropdown.Item>
              <Dropdown.Item eventKey="data_studio" >data_studio</Dropdown.Item>
              <Dropdown.Item eventKey="firebase_analytics" >firebase_analytics</Dropdown.Item>
              <Dropdown.Item eventKey="flutter" >flutter</Dropdown.Item>
              <Dropdown.Item eventKey="github" >github</Dropdown.Item>
              <Dropdown.Item eventKey="hotjar" >hotjar</Dropdown.Item>
              <Dropdown.Item eventKey="ionic_angular" >ionic_angular</Dropdown.Item>
              <Dropdown.Item eventKey="modyo" >modyo</Dropdown.Item>
              <Dropdown.Item eventKey="optimize" >optimize</Dropdown.Item>
              <Dropdown.Item eventKey="powerbi" >powerbi</Dropdown.Item>
              <Dropdown.Item eventKey="unity" >unity</Dropdown.Item>
            </div>
          </DropdownButton>
          <Table responsive className="table-valid-skills-filter" striped bordered hover>
            <tbody className="table-body-filter" id="hiddenModal" display="none">
              <tr className="wrap-table">{showName.map((item, index) => (<td key={index} className="tdTable">{`${item}`}</td>))}
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button className="button" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Filtrar Aptitudes
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default FilterSkills