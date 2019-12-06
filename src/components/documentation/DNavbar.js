import React from 'react';
import {
  Navbar,
  NavbarToggler,
  Collapse,
  NavItem,
  Nav,
  Button
} from 'reactstrap';
import { NavLink as NLink } from 'react-router-dom';
import logo from './../../assets/img/logo_white.svg';
import { FontAwesomeIcon } from  '@fortawesome/react-fontawesome';


class DNavbar extends React.Component {
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
      <Navbar expand="md" dark color="primary" className="mb-4 fixed-top">
        <NLink to="/" className="navbar-brand d-flex align-items-center">
          <img className="mr-1 ml-2" style={{height: 30}} src={logo} alt="logo" />
          Lazy Kit
        </NLink>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button color="light" outline={true} href="/">Live Preview</Button>
            </NavItem>
            <NavItem className="mx-2">
              <Button color="light" href="/">
                <FontAwesomeIcon icon="download" /> {" "}
                Download
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
};

export default DNavbar;
