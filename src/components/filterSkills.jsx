import React from 'react';
import "firebase/firestore";
import { useFirebaseApp } from 'reactfire';
import { Button, Modal, Dropdown, DropdownButton } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';

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
        if (dataUser[selectedSkill] === "Nulo") {
          //console.log(dataUser.name) 
          arrayNames.push(dataUser.name);
          
          
        }                   
      });
      setShowName(arrayNames);
    });
},[selectedSkill, db]) 





  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        dialogClassName="modal-5000w"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
             {
              showName.map((item,i)=> (         
              <p>{`${item}`}</p>
                      
              ))
                }          
          </p>
          <p>
            <DropdownButton onSelect={handleSelect} id="dropdown-basic-button" title="Dropdown button">
              <Dropdown.Item eventKey="github" >github</Dropdown.Item>
              <Dropdown.Item eventKey="unity" >unity</Dropdown.Item>
              <Dropdown.Item eventKey="angular" >angular</Dropdown.Item>
            </DropdownButton>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div>
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Filtrar Aptitudes
        </Button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    </div>
  );
}

export default FilterSkills

