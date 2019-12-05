import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import {
  Link,
  NavLink
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './../../assets/img/logo.svg';

class PNavbar extends React.Component {
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
              <NavLink to="/" className="navbar-brand">
                <img src={logo} alt="logo" className="mr-2" height="30" />
                {this.props.title}
              </NavLink>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="mx-2" navbar>
                  <NavItem key="navitem-1">
                    <UncontrolledDropdown>
                      <DropdownToggle nav>
                        Components
                      </DropdownToggle>
                      <DropdownMenu>
                        <Link to="/documentation/getting-started">
                          <DropdownItem>Getting Started</DropdownItem>
                        </Link>
                        <Link to="/documentation/alerts">
                          <DropdownItem>Core Elements</DropdownItem>
                        </Link>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </NavItem>
                  <NavItem key="navitem-2">
                    <UncontrolledDropdown>
                      <DropdownToggle nav>
                        Examples
                      </DropdownToggle>
                      <DropdownMenu>
                        <Link to="/register">
                          <DropdownItem>Register</DropdownItem>
                        </Link>
                        <Link to="/profile">
                          <DropdownItem>Profile</DropdownItem>
                        </Link>
                        <Link to="/landing">
                          <DropdownItem>Landing</DropdownItem>
                        </Link>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                  <NavItem key="navitem-3">
                    <NavLink className="btn btn-outline-light" to="/documentation">Documentation</NavLink>
                  </NavItem>
                  <NavItem className="mx-2">
                    <Button color="light" href="https://bootstrapbay.com/theme/lazy-free-react-ui-kit-BD90DEB">
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

PNavbar.propTypes = {
  title: PropTypes.string
};

PNavbar.defaultProps = {
  title: "Lazy Kit"
};

export default PNavbar;
