import React, {Component} from "react";
import "./style.scss"

class Input extends Component {
    constructor() {
        super();
        this.state = {items: [], value: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        console.log(this.state.value);
        e.preventDefault();

        if (!this.state.value.length) {
            return;
        }

        const newItem = {value: this.state.value};

        this.setState(state => ({
            items: state.items.concat(newItem),
            value: ""
        }));

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input className="input" type="text" value={this.state.value} onChange={this.handleChange}/>
                    <button className="btn btn-add">&#10010;</button>
                </label>
            </form>
        );
    }
}

export default Input;
