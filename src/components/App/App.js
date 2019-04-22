import React, {Component} from "react";
import "./style.scss";
import {List} from "../List"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {items: [], value: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.sortById = this.sortById.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();

        if (!this.state.value.length) {
            return;
        }

        const newItem = {
            value: this.state.value,
            id: this.state.items.length + 1
        };


        this.setState(state => ({
            items: state.items.concat(newItem),
            value: ""
        }));
        // console.log(this.state)
        console.log(this.state.items.length)

    }

    sortById() {
        console.log(this.state.items);
        this.setState(this.state.items.reverse());
        console.log(this.state.items);
        this.render();
    }

    render() {
        return (
            <div className="container">
                <header className="header">TODO List</header>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input className="input" type="text" value={this.state.value} onChange={this.handleChange}/>
                        <button className="btn btn-add">&#10010;</button>
                    </label>
                </form>
                <table className="table">
                    <thead>
                    <tr>
                        <th onClick={this.sortById}>#</th>
                        <th>Name</th>
                    </tr>
                    </thead>
                    <List items={this.state.items}/>
                </table>
            </div>
        );
    }
}

export default App;
