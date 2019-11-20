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
            <p class="lead pt-3 mt-3 mt-md-0">Menu With Icons</p>
            <nav class="navbar navbar-expand-lg navbar-dark bg-info rounded">
              <div class="container">
                <a class="navbar-brand" href="#">Menu</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-inner-success" aria-controls="nav-inner-success" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="nav-inner-success">
                  <ul class="navbar-nav ml-lg-auto">
                    <li class="nav-item">
                      <a class="nav-link nav-link-icon" href="#">
                        <i class="fa fa-globe"></i>
                        <span class="nav-link-inner--text d-lg-none">Discover</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link nav-link-icon" href="#">
                        <i class="fa fa-user"></i>
                        <span class="nav-link-inner--text d-lg-none">Profile</span>
                      </a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link nav-link-icon" href="#" id="nav-inner-success_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-heart"></i>
                        <span class="nav-link-inner--text d-lg-none">Settings</span>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="nav-inner-success_dropdown_1">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </Col>
        </Row>
      </div>
    );
  };
};

export default NavMenues;
