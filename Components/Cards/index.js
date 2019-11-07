import React ,{Component} from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export default class Cards extends Component{
    render() {
        return (
            <Card className="main_card container">
            <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
                {this.props.text}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">{this.props.footer}</small>
            </Card.Footer>
        </Card>
        );
    }
}