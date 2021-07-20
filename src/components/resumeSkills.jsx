import React from 'react';
import "firebase/firestore";
import { useFirebaseApp } from 'reactfire';

const ResumeSkills = props => {

    const firebase = useFirebaseApp();
    const user = firebase.auth().currentUser.email
    const db = firebase.firestore();
  
    db.collection('users').where('user.email', '==', user).get().then((querySnapshot) => {
      console.log(querySnapshot.docs);
      querySnapshot.forEach((doc) => {
        console.log("Dataaa" , doc.data());
      });
    });
    
    return (
        <div>
            <h1>Skills</h1>
        </div>
    );
};


export default ResumeSkills;