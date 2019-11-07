import React, {Component} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Menu extends Component {
    render() {
        return (
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {this.props.name}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {this.props.study.map((steps) => <Dropdown.Item>{steps}</Dropdown.Item>)}
            </Dropdown.Menu>
            </Dropdown>
        );
    }
}