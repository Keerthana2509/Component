import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export default class Progress extends React.Component {
    render() {
        let val = this.props.progress;
        return (
            <div className="container layout">
                <ProgressBar animated variant={this.props.variant} now={val}/>
            </div>
        );
    }
}