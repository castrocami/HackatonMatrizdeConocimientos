import React from 'react';
import "firebase/firestore";
import { useFirebaseApp } from 'reactfire';
import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

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
                if(userData[element] !== "Nulo" && element !== "employer_name" && element !== "name" && element !== "email" && element !== "id" && element !== "undefined" ) {
                    tempArray.push([element]);
                }
              })
              setNewArray(tempArray);
              setUserData(userData);
            });
          });
    },[user, db]);

    return (
      <div>
        <Table responsive>
          <thead className= "headerContent">
            <tr>
              {Array.from({ length: 1 }).map((_, index) => (
                <th key={index}>Skill</th>
              ))}
              {Array.from({ length: 1 }).map((_, index) => (
                <th key={index}>Nivel</th>
              ))}
              {Array.from({ length: 1 }).map((_, index) => (
                <th key={index}>Estado</th>
              ))}
            </tr>
          </thead>
          <thead className= "tableContent"> 
            <tr>
              {Array.from({ length: 1 }).map((_, index) => (
                <th key={index}>{newArray.map((element) => (
                  <p>
                    {element}
                  </p>
                ))}</th>
              ))}
              {Array.from({ length: 1 }).map((_, index) => (
                <th key={index}>{newArray.map((element) => (
                  <p>
                    {userData[element]}
                  </p>
                ))}</th>
              ))}
            </tr>
          </thead>
        </Table>
      </div>
    );
};

export default ResumeSkills;