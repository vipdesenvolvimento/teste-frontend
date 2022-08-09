import React from 'react';

import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListLeadComponent from './components/ListLeadComponent';
import CreateLeadComponent from './components/CreateLeadComponent';
import ViewLeadComponent from './components/ViewLeadComponent';

function App() {
  return (
    <div>
      <Router>
        <Switch> 
            <Route path = "/" exact component = {ListLeadComponent}></Route>
            <Route path = "/leads" component = {ListLeadComponent}></Route>
            <Route path = "/add-lead/:id" component = {CreateLeadComponent}></Route>
            <Route path = "/view-lead/:id" component = {ViewLeadComponent}></Route>
            {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
      </Switch>
       
      </Router>
    </div>
    
  );
}

export default App;