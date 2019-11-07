import React, {Component} from 'react';
import Base from '../Button';


class Popup extends Component {
    constructor() {
        super();
        this.alertmsg = this.alertmsg.bind(this);
    }
    alertmsg() {
        alert("Clicked a button");
    }
    render() {
        return(
            <div>
                <Base variant="danger" text="Popup" click={this.alertmsg}/> 
            </div>
        );
    }
}
export default Popup;