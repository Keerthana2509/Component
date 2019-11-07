import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Base from '../Button';

export default class Modals extends Component {
    render() {
        return(
            <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{this.props.paragraph}
                </p>
            </Modal.Body>

            <Modal.Footer>
                <Base variant="secondary" text="Close"/>
            </Modal.Footer>
            </Modal.Dialog>
        );
    }
}