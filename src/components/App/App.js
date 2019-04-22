import React, {Component} from "react";
import "./style.scss";
import {Input} from "../Input"
import {List} from "../List"

class App extends Component {
    render() {
        return (
            <div className="container">
                <header className="header">TODO List</header>
                <Input/>
                <List/>
            </div>
        );
    }
}

export default App;
