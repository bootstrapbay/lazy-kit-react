import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './../../assets/img/logo.svg';

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
        <div>
          <Navbar className="navbar-transparent" light expand="md">
            <Container fluid={true}>
              <Row>
                <Col xs="12" md={{size: 2, offset: 1}} className="d-flex justify-content-between">
                  <NavLink to="/" className="navbar-brand text-dark d-flex align-items-center">

                      <img src={logo} alt="Lazy Kit" className="mr-2" height="30" />
                      Lazy Kit

                  </NavLink>
                  <NavbarToggler onClick={this.toggle} />
                </Col>
                <Col xs="12" md={{size: 5, offset: 3}} className="d-flex justify-content-end text-center">
                  <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                      <NavItem key="navitem-3">
                        <NavLink to="/documentation" className="btn btn-outline-light">
                          Documentation
                        </NavLink>
                      </NavItem>
                      <NavItem className="mx-2">
                        <Button color="light" href="https://bootstrapbay.com/theme/lazy-free-react-ui-kit-BD90DEB">
                          <FontAwesomeIcon icon="download" /> {" "}
                          Download
                        </Button>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </Col>
              </Row>
            </Container>
          </Navbar>
        </div>
      );
    }
};

export default RNavbar;
