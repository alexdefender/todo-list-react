import React, {Component} from "react";
import "./style.scss";

class List extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        // console.log(e.target.id)
        this.props.deleteValueFromList(+e.target.id)
        // console.log(e.target.id);
    }

    render() {
        // console.log(this.props.items);
        return (
            <tbody>
            {this.props.items.map(item =>
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.value}</td>
                    <td>
                        <button id={item.id} className="btn btn-del" onClick={this.handleChange}>&#10006;</button>
                    </td>
                </tr>
            )}
            </tbody>
        )
    }
}

export default List;
