import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Nav,
  Button
} from 'reactstrap';
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
        <NavbarBrand className="d-flex align-items-center" href="/">
          <img src={logo} alt="Lazy kit" className="mr-1 ml-2" style={{height: 30}} />
          Lazy Kit
        </NavbarBrand>
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
