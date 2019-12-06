import React from 'react';
import {
  Nav,
  NavItem
} from 'reactstrap';
import {
  Link,
  useRouteMatch
} from 'react-router-dom';
import {
  introduction_routes,
  documentation_routes,
  support_routes
} from './../../routes.js';

const DSidebar = () => {
    let { path } = useRouteMatch();
    let introItems = introduction_routes.map((route, index) => {
      return (
        <NavItem key={`sidebar-route-${index}`}>
          <Link to={route.path} className={`nav-link ${path === route.path ? "active" : " "}`}>{route.name}</Link>
        </NavItem>
      );
    });

    let docItems = documentation_routes.map((route, index) => {
      return (
        <NavItem key={`sidebar-route-${index}`}>
          <Link to={route.path} className={`nav-link ${path === route.path ? "active" : " "}`}>{route.name}</Link>
        </NavItem>
      );
    });

    let supportItems = support_routes.map((route, index) => {
      return (
        <NavItem key={`sidebar-route-${index}`}>
          <Link to={route.path} className={`nav-link ${path === route.path ? "active" : " "}`}>{route.name}</Link>
        </NavItem>
      );
    });
    return (
      <div className="sidebar-sticky">
        <h6 className="sidebar-heading">Introduction</h6>
        <Nav className="flex-column">
          {introItems}
        </Nav>
        <h6 className="sidebar-heading core">Components</h6>
        <Nav className="flex-column">
          {docItems}
        </Nav>
        <h6 className="sidebar-heading core">Help & Support</h6>
        <Nav className="flex-column">
          {supportItems}
        </Nav>
      </div>
    );
};

export default DSidebar;
