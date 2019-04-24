import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse } from 'reactstrap';
import './header.css';
// import AboutUs from '../../components/about_us/about_us';
import '../router';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          collapsed: true
        };

        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <div className='header-wrapper'>
                <Navbar color="faded" light>
                    <NavbarBrand href="/" className="mr-auto">TuSeZjesz</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/about_us">About us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Kontakt</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
