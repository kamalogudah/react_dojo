import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {

  state = {
    persons: [
      {name: 'Max', age: 28 },
      {name: 'Manu', age: 29 },
      {name: 'Irene', age: 26 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <button> Switch Name </button>
        <Person name="paul" age="45">
          
          My hobbies: Boobies
        </Person>
        <Person name= { this.state.persons[0].name } age= { this.state.persons[0].age} />
        <Person name= { this.state.persons[1].name } age= { this.state.persons[1].age} />
        <Person name= { this.state.persons[2].name } age= { this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
