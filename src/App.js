import React, { Component } from 'react';
import { NavLink , Route, Switch } from "react-router-dom";
import './App.css';
import Form from "./component/form"
import Form2 from "./component/form2"
import Form3 from "./component/form3"

class App extends Component {
  render() {
    return (
      <div>
        <div className="title">
          <h1>Let's talk</h1>
          <p>Think you have what it takes? Show us.</p>
        </div>
        <div className="nav">
          <NavLink activeClassName="selected" to="/form">Form1</NavLink >

          <NavLink activeClassName="selected" to="/form2">Form2</NavLink >
        
          <NavLink activeClassName="selected" to="/form3">Form3</NavLink >
        </div>
        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/form2" component={Form2} />
          <Route exact path="/form3" component={Form3} />
        </Switch>
      </div>
    );
  }
}

export default App;
