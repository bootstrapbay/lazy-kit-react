import React from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
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
            <NavLink to="/" className="navbar-brand d-fles align-items-center text-dark">
              <img className="mr-2" style={{height: 30}} src={logo} alt="logo" />
              Lazy Kit
            </NavLink>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-lg-auto" navbar>
                <NavItem>
                  <NavLink to="/documentation" className="btn btn-outline-primary">
                    Documentation
                  </NavLink>
                </NavItem>
                <NavItem className="mx-2">
                  <Button color="primary" href="https://bootstrapbay.com/theme/lazy-free-react-ui-kit-BD90DEB">
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
