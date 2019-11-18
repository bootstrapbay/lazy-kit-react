import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './../../assets/img/logo.svg';

class ExampleNavbar extends React.Component {
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
        <div>
          <Navbar className="navbar-dark bg-primary" expand="lg">
            <Container>
              <NavbarBrand href="/">
                <img src={logo} alt="Example Navbar 1" className="mr-2" height="30" />
                {this.props.title}
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="mx-2" navbar>
                  <NavItem>
                    <UncontrolledDropdown>
                      <DropdownToggle nav>
                        Components
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem href="documentation/getting_started.html" target="_blank">Getting Started</DropdownItem>
                        <DropdownItem href="documentation/alerts.html" target="_blank">Core Elements</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </NavItem>
                  <NavItem>
                    <UncontrolledDropdown>
                      <DropdownToggle nav>
                        Examples
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem href="register.html" target="_blank">Register</DropdownItem>
                        <DropdownItem href="profile.html" target="_blank">Profile</DropdownItem>
                        <DropdownItem href="profile.html" target="_blank">Profile</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <Button color="light" outline={true}>Documentation</Button>
                  </NavItem>
                  <NavItem className="mx-2">
                    <Button color="light">
                      <FontAwesomeIcon icon="download" /> {" "}
                      Download
                    </Button>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        </div>
      );
    }
};

ExampleNavbar.propTypes = {
  /**
   * The application's title.
   */
  title: PropTypes.string
};

ExampleNavbar.defaultProps = {
  title: "Lazy Kit"
};

export default ExampleNavbar;
