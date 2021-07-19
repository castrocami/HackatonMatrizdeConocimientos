import './App.css';
import Login from './components/login'
import Profile from './components/profile'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
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
}

export default App;
