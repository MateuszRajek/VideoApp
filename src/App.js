import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainView from './Components/MainView/MainView';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/'>
          <MainView />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
