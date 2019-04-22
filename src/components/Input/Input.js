import React, {Component} from "react";
import './style.scss'

class Input extends Component {
    render() {
        return (
            <label>
                <input className="input" type="text"/>
                <button className="btn btn-add">&#10010;</button>
            </label>
        );
    }
}

export default Input;
