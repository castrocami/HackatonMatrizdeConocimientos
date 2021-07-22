import './App.css';
import Login from './components/login'
import Profile from './components/profile'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useEffect, useState } from "react";
import firebase from "firebase/app";

function App() {
  const[authReady, setAuthReady] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        setAuthReady(true);
      }
    })
  }, []);

  if(authReady){
    return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login/>
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
        </Switch>
      </Router>
    );
  }else{
    return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
