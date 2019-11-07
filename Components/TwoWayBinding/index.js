import React, {Component} from 'react';

export default class TwoWayBinding extends Component {
    constructor() {
        super();
        this.state = {
            text: "Initial text"
        };
    }
    twoway(e) {
        this.setState({
            text: e.target.value
        })
    }
    render() {
        return(
            <div>
                <p>{this.state.text}</p>
                <input type="text" value={this.state.text} onChange={this.twoway.bind(this)}/>
            </div>
        );
    }
}