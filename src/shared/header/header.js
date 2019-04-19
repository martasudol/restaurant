import React from 'react';
import {Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse} from 'reactstrap';

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
                                <NavLink href="#">About us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
