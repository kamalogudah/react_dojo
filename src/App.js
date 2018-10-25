import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <Person name="paul" age="45">
          
          My hobbies: Boobies
        </Person>
      </div>
    );
  }
}

export default App;
