import React from 'react';
import {
  Row,
  Container,
  Col,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavMenues extends React.Component {
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
      <div className="component">
        <Row>
          <Col xs="12" lg="6">
            <p className="lead pt-3">Menu With Text</p>
            <Navbar expand="lg" dark className="bg-danger rounded">
              <Container>
                <NavbarBrand href="/">Menu</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-lg-auto" navbar>
                    <NavItem>
                      <NavLink href="/">
                        Discover
                        <span className="sr-only">(current)</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/">
                        Profile
                      </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Settings
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          Action
                        </DropdownItem>
                        <DropdownItem>
                          Another action
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          Something else here
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Collapse>
              </Container>
            </Navbar>
          </Col>

          <Col xs="12" lg="6">
            <p className="lead pt-3">Menu With Icons</p>
            <Navbar expand="lg" dark className="bg-info rounded">
              <Container>
                <NavbarBrand href="/">Menu</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-lg-auto" navbar>
                    <NavItem>
                      <NavLink href="/" className="nav-link-icon">
                        <FontAwesomeIcon icon="globe" />
                        <span className="nav-link-inner--text d-lg-none">Discover</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/" className="nav-link-icon">
                        <FontAwesomeIcon icon="user" />
                        <span className="nav-link-inner--text d-lg-none">Profile</span>
                      </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        <FontAwesomeIcon icon="heart" />
                        <span className="nav-link-inner--text d-lg-none">Settings</span>
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          Action
                        </DropdownItem>
                        <DropdownItem>
                          Another action
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          Something else here
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </div>
    );
  };
};

export default NavMenues;
