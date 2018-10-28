import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            { name: "Max", age: 28 },
            { name: "Manu", age: 29 },
            { name: "Irene", age: 26 }
        ],
        otherState: "some other stuff",
        showPersons: false
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
    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow })
    }
    render() {
        const style = {
            backgroundColor: "white",
            font: "inherit",
            border: "1px solid blue",
            padding: "8px",
            cursor: "pointer"
        };

        let persons = null;
        if (this.state.showPersons) {
            persons = ( <
                div > {
                    this.state.persons.map(person => {
                        return <Person
                        name = { person.name }
                        age = { person.age }
                        />
                    })
                } < Person name = "paul"
                age = "45" >
                My hobbies: Boobies < /Person>   < /
                div >
            );
        }
        return ( < div className = "App" >
            <
            h1 > Hi, I am a react App < /h1>  <
            button style = { style }
            onClick = { this.togglePersonsHandler } > { " " }
            Switch Name { " " } <
            /button>    { persons } < /
            div >
        );
    }
}

export default App;