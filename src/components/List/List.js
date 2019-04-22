import React, {Component} from "react";
import "./style.scss";

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.props.items);
        return (
            <tbody>
            {this.props.items.map(item =>
                <tr key={item.id}>
                    <th>{item.id}</th>
                    <td>{item.value}</td>
                    <td>
                        <button className="btn btn-del">&#10006;</button>
                    </td>
                </tr>
            )}
            </tbody>
        )
    }
}

export default List;
