import React from 'react';
import Prism from 'prismjs';
import PrismJsx from 'prismjs/components/prism-jsx.min';
import LazyNavbar  from "./../../components/LazyNavbar";

class Navbars extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render () {
    let pr = {
      bg: "bg-primary",
      navItems: [{name: "Twitter", icon: ['fab', 'twitter']}, {name: "Facebook", icon: ['fab', 'facebook-square']}, {name: "Github", icon: ['fab', 'github']}]
    }
    return (
      <div>
        <h2>Navbars</h2>
        <p>Navbars are imported from <b>reactstrap</b> and styled with the <b>lazy kit</b>. For full documentation on how to use the Alert component, go <a href="https://reactstrap.github.io/components/navbar/" target="_blank">here</a>.</p>
        <p>Here is an example of a Navbar component that gets all the data it displays through props.</p>
        <LazyNavbar {...pr}/>
        <pre>
          <code className="language-jsx">
          {`
import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar,
  NavItem,
  NavLink,
  Container,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class LazyNavbar extends React.Component {
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
    let navItems = this.props.navItems.map((item, index) => {
      let icon;
      if (item.icon && item.icon !== "") {
        icon = <FontAwesomeIcon icon={item.icon} />
      } else {
        icon = "";
      }
      return (
        <NavItem key={index}>
          <NavLink href="/">
            {icon}{" "}
            {item.name}
          </NavLink>
        </NavItem>
      );
    })
    return (
      <Navbar expand="lg" dark={this.props.dark} light={this.props.light} className={this.props.bg}>
        <Container>
          <NavbarBrand href="/">
            <img className="mr-2" style={{height: 30}} src={require({this.props.logo})} alt="logo" />
            {this.props.name}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-lg-auto" navbar>
              {navItems}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
};

LazyNavbar.propType = {
  logo: PropTypes.string,
  name: PropTypes.string,
  bg: PropTypes.string,
  navItems: PropTypes.array,
  dark: PropTypes.bool,
  light: PropTypes.bool
};

LazyNavbar.defaultProps = {
  logo: "logo.svg",
  name: "Lazy Kit",
  bg: "bg-primary",
  navItems: [],
  dark: true,
  light: false
};

export default LazyNavbar;
          `}
          </code>
        </pre>
      </div>
    )
  }

};

export default Navbars;
