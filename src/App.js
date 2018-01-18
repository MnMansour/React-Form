import React, { Component } from 'react';
import './App.css';
import Form from "./component/form"
import Form2 from "./component/form2"

class App extends Component {
  render() {
    return (
      <div>
        <div className="title">
          <h1>Let's talk</h1>
          <p>Think you have what it takes? Show us.</p>
        </div>
        <Form />
        <Form2 />
      </div>
    );
  }
}

export default App;
