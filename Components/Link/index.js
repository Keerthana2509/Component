import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

export default class Link extends React.Component {
    render() {
        return (
                <a href="#!" className="link">{this.props.text}</a>
        );
    }
}