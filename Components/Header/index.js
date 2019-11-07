import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Menu from '../Menu';
import Link from '../Link';
import './style.css';

class Header extends Component {
    render() {
        let study = ["React Setup","React Modules","Hands-on","Components","Events","Routing","File structures","Objects","Arrays"];
        return (
            <div className="TextColor">
                <Navbar expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">{this.props.brand}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link text="React Setup"/>
                        <Link text="React Modules"/>
                        <Link text="Hands-on"/>
                        <Link text="Events"/>
                    </Nav>
                    <Nav>
                        <Menu name="Learn" study={study}/>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
export default Header;