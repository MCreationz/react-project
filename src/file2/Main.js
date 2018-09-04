import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import Home from "./Home.js";
import Stuff from "./Stuff.js";
import Contact from "./Contact.js";
 import Alert from "./Alert.js";
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
             <li><NavLink to="/alert">React alert</NavLink></li>
          </ul>
          <div className="content">
  <Route exact path="/" component={Home}/>
  <Route path="/stuff" component={Stuff}/>
  <Route path="/contact" component={Contact}/>
   <Route path="/alert" component={Alert}/>
</div>
        </div>
      </HashRouter>
    );
  }
}
export default Main;