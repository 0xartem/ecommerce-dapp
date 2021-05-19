import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage-component';
import './App.css';

const RobotsPage = () => (
  <div>
    <h1>ROBOTS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/robots' component={RobotsPage} />
      </Switch>
    </div>
  );
}

export default App;
