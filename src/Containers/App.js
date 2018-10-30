import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: "asdf1", name: "Max", age: 28 },
        { id: "hghw3", name: "Manu", age: 29 },
        { id: "yuth4", name: "Irene", age: 26 }
      ],
      otherState: "some other stuff",
      showPersons: false
    };
    console.log("[App.js] Inside Constructor", props);
  }

  componentWillMount() {
    console.log("[App.js] Inside ComponentWillMount");
  }

  componentDidMount() {
    console.log("[App.js] Inside ComponentDidMount");
  }
  //   state = {
  //     persons: [
  //       { id: "asdf1", name: "Max", age: 28 },
  //       { id: "hghw3", name: "Manu", age: 29 },
  //       { id: "yuth4", name: "Irene", age: 26 }
  //     ],
  //     otherState: "some other stuff",
  //     showPersons: false
  //   };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    console.log("[App.js] Inside Render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          appFooter={this.props.footer}
        />
        {persons}
      </div>
    );
  }
}

export default App;
