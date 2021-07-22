import React from 'react';
import "firebase/firestore";
import { useFirebaseApp } from 'reactfire';
import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { XLg } from 'react-bootstrap-icons';
import '../style/resumeSkills.css';

const ResumeSkills = props => {
  const [newArray, setNewArray] = useState([]);
  const [userData, setUserData] = useState({});
  const firebase = useFirebaseApp();
  const user = firebase.auth().currentUser.email;
  const db = firebase.firestore();

  useEffect(() => {
    db.collection('users').where('user.email', '==', user).onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const userData = doc.data().user;
        const keysArray = Object.keys(userData);
        const tempArray = []
        keysArray.forEach((element) => {
          if (userData[element] !== "Nulo" && element !== "employer_name" && element !== "name" && element !== "email" && element !== "id" && element !== "undefined") {
            tempArray.push([element]);
          }
        })
        setNewArray(tempArray);
        setUserData(userData);
      });
    });
  }, [user, db]);

  const deleteSkill = (skill) => {
    return () => {
      db.collection('users').where('user.email', '==', user).onSnapshot((querySnapshot) => {
        let saveUserId;
        querySnapshot.forEach((doc) => {
          saveUserId = doc.id;
        })
        const editSkill = db.collection('users').doc(saveUserId);
        console.log("HOLA", saveUserId)
        return editSkill.update({
          [`user.${skill}`]: "Nulo",
        })
          .then(() => {
            console.log('Document successfully updated!');
          })
          .catch((error) => {
            console.error('Error updating document: ', error);
          });
      });
    }
  }

  return (
    <div className="skillsTable">
      <Table striped bordered hover size="sm">
        <thead className="headerContent">
          <tr>
            <th>Mis Skills</th>
            <th>Nivel</th>
            <th>Estado</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody className="tableContent">
          {newArray.map((element) => {
            return (
              <tr>
                <td>{element}</td>
                <td>{userData[element]}</td>
                <td>Aprobado </td>
                <td onClick={deleteSkill(element)} className="delete-skill"><XLg /></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div >
  );
};

export default ResumeSkills;