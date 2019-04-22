import React, {Component} from "react";
import "./style.scss";
import {List} from "../List"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {items: [], value: ""};
        this.sortFlag = true;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.sortById = this.sortById.bind(this);
        this.sortByName = this.sortByName.bind(this);
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
        this.setState(this.state.items.sort((a, b) => {
            if (this.sortFlag) {
                return b.id - a.id
            } else {
                return a.id - b.id;
            }
        }));
        this.sortFlag = !this.sortFlag;
    }

    sortByName() {
        // console.log(this.sortFlag)
        this.setState(this.state.items.sort((a, b) => {
            let valueA = a.value.toLowerCase(), valueB = b.value.toLowerCase();
            if (this.sortFlag) {
                if (valueA < valueB) {
                    return -1;
                }
            } else {
                if (valueA > valueB) {
                    return -1;
                }
            }
        }));
        this.sortFlag = !this.sortFlag;
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
                        <th onClick={this.sortByName}>TODO</th>
                    </tr>
                    </thead>
                    <List items={this.state.items}/>
                </table>
            </div>
        );
    }
}

export default App;
