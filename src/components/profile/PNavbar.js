import React from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { NavLink as NLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './../../assets/img/logo_white.svg';

class RNavbar extends React.Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }

    toggle () {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      return (
        <Navbar expand="lg" dark color="primary" className="mb-4 fixed-top">
          <Container>
            <NLink to="/" className="navbar-brand d-flex align-items-center">
              <img className="mr-2" style={{height: 30}} src={logo} alt="logo" />
              Lazy Kit
            </NLink>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-lg-auto" navbar>
                <NavItem>
                  <NavLink href="/profile">
                    <FontAwesomeIcon icon={['far', 'compass']} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/profile">
                  <FontAwesomeIcon icon={['far', 'heart']} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/profile">
                  <FontAwesomeIcon icon={['far', 'user']} />
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      );
    }
};

export default RNavbar;
