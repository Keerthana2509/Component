import React, { Component } from "react";
import './style.css';

export default class List extends Component {
    render() {
        return(
            <div>
                <ul>
                    {this.props.study.map((steps) => <li className="list">{steps}</li>)}
                </ul>
            </div>
        );
    }
}