import React from "react";
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './../../assets/img/logo.svg';

class LNavbar extends React.Component {
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
        <Navbar expand="lg" dark color="white" className="mb-4">
          <Container>
            <NavbarBrand href="/" className="d-flex align-items-center text-dark">
              <img className="mr-2" style={{height: 30}} src={logo} alt="logo" />
              Lazy Kit
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-lg-auto" navbar>
                <NavItem>
                  <Button color="primary" outline={true}>Documentation</Button>
                </NavItem>
                <NavItem className="mx-2">
                  <Button color="primary">
                    <FontAwesomeIcon icon="download" /> {" "}
                    Download
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      );
    }
};

export default LNavbar;
