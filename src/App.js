import React, { Component } from 'react';
import {Router, Switch, Route} from "react-router";
import createHistory from "history/createBrowserHistory";
//import ClassBasedCalc from "./classBasedCalc.js";
import Calc from "./Calc.js";
import './App.css';

class App extends Component {
  render() {
    return (
        <Router history={createHistory()}>
          <Switch>
            {/*<Route path="/class" exact component={ClassBasedCalc} />*/}
            <Route path="/" exact component={Calc} />
          </Switch>
        </Router>
    );
  }
}
export default App;
