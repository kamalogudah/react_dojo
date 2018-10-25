import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Irene", age: 26 }
    ],
    otherState: "some other stuff"
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Irene", age: 89 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Irene", age: 89 }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <button onClick={() => this.switchNameHandler("Sucka")}>
          {" "}
          Switch Name{" "}
        </button>
        <Person name="paul" age="45">
          My hobbies: Boobies
        </Person>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, " Comeone")}
        >
          {" "}
          Shit I love: Doogy{" "}
        </Person>
      </div>
    );
  }
}

export default App;
