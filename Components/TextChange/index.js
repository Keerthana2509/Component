import React, {Component} from 'react';
import Base from '../Button';

export default class TextChange extends Component {
    constructor() {
        super();
        this.state = {
            text :"Old text"
        };
    }
    changetext() {
        this.setState({
            text: "New text"
        });
    }
    render() {
        return(
            <div>
                <p>{this.state.text}</p>
                <Base click={this.changetext.bind(this)} text="Change" variant="primary"/>
            </div>
        );
    }
}