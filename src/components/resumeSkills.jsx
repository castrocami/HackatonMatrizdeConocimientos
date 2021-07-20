import React from 'react';
import "firebase/firestore";
import { useFirebaseApp } from 'reactfire';
import { useState, useEffect } from 'react';

const ResumeSkills = props => {
    const [newArray, setNewArray] = useState([]); 
    const firebase = useFirebaseApp();
    const user = firebase.auth().currentUser.email;
    const db = firebase.firestore();

    useEffect(()=>{
        db.collection('users').where('user.email', '==', user).get().then((querySnapshot) => {
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
            });
          });
    },[user]);

    return (
        <div>
          {newArray.map((element) => <h1>{element}</h1>)}
      </div>
  );
};

export default ResumeSkills;