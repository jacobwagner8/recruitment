import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Rushees from './components/Rushees';
import Rushee from './components/Rushee';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signin' component={SignIn} />
        <Route path='/rushees' component={Rushees} />  
        <Route path='/rushee' exact component={Rushee} /> 
      </Switch>
    </Router>
  );
}

export default App;
