import React from 'react';
import Base from '../Button';

export default class Counter extends React.Component {
    constructor() {
        super();
        this.state = {count: 0};
        this.increament = this.increament.bind(this);
        this.decreament = this.decreament.bind(this);
    }
    increament() {
        this.setState({
            count: this.state.count + 1
        });
        console.log(this.count);
    }
    decreament () {
        this.setState({
            count: this.state.count - 1
        });
        console.log(this.count);
    }
    render() {
        return (
            <div>
            <p>Count : {this.state.count}</p>
            <Base  className="position" variant="primary" text="Plus" click={this.increament}/>
            <Base variant="primary" text="Minus" click={this.decreament}/>
            </div>
        );
    }
}