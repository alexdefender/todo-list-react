import React, {Component} from "react";
import "./style.scss";

class List extends Component {
    render() {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>1</th>
                    <td>First todoffffffffffff ffffffffff ffffffff fffffff</td>
                    <td>
                        <button className="btn btn-del">&#10006;</button>
                    </td>
                </tr>
                </tbody>

            </table>
        );
    }

}

export default List;
