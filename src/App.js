import React, { useState } from 'react';
import Login from "./Login"
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
import JobHome from './JobHome';
import Apply from './Apply';

function App() {
  

  

  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>

        <Route exact path="/jobs">
          <JobHome/>
        </Route>

        <Route exact path="/apply">
          <Apply/>
        </Route>
      </Switch>
    </Router>
    </>
  )
}

export default App;
