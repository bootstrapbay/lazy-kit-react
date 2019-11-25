import React from 'react';
import {
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  TabContent,
  TabPane
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Pills extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeTab: "home"
      }
      this.toggle = this.toggle.bind(this);
    }

    toggle(tab) {
      this.activeTab !== tab && this.setState({ activeTab: tab });
    }

    render() {
    return (
      <div className="component">
        <p className="lead pt-3">Tabs</p>
        <Nav pills className="nav-secondary">
          <NavItem>
            <NavLink className={this.state.activeTab === "home" ? "active" : " "} onClick={() => {this.toggle("home")}} >Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={this.state.activeTab === "profile" ? "active" : " "} onClick={() => {this.toggle("profile")}}>Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled</NavLink>
          </NavItem>
          <UncontrolledDropdown nav>
            <DropdownToggle nav caret>
              Actions
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="home">
            <p>I suspect the most we can hope for, and it's no small hope, is that we never give up, that we never stop giving ourselves permission to try to love and receive love.</p>
          </TabPane>
          <TabPane tabId="profile">
            <p>Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.</p>
          </TabPane>
          <TabPane tabId="active">
            <p>When it comes down to it, that’s what life is all about: showing up for the people you love, again and again, until you can’t show up anymore.</p>
          </TabPane>
        </TabContent>

        <Nav pills className="nav-danger mt-3">
          <NavItem>
            <NavLink className={this.state.activeTab === "home" ? "active" : " "} onClick={() => {this.toggle("home")}} >
              <FontAwesomeIcon icon="igloo" /> {" "}
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={this.state.activeTab === "profile" ? "active" : " "} onClick={() => {this.toggle("profile")}}>
              <FontAwesomeIcon icon="location-arrow" /> {" "}
              Actions
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
                <FontAwesomeIcon icon="address-card" /> {" "}
                Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={this.state.activeTab === "socks" ? "active" : " "} onClick={() => {this.toggle("dashboard")}}>
              <FontAwesomeIcon icon="chart-line" /> {" "}
              Dashboard
            </NavLink>
          </NavItem>
        </Nav>

        <Nav pills className="nav-info nav-icons mt-3">
          <NavItem>
            <NavLink className={this.state.activeTab === "home" ? "active" : " "} onClick={() => {this.toggle("home")}} >
              <FontAwesomeIcon icon="igloo" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={this.state.activeTab === "profile" ? "active" : " "} onClick={() => {this.toggle("profile")}}>
              <FontAwesomeIcon icon="location-arrow" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
                <FontAwesomeIcon icon="address-card" /> {" "}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={this.state.activeTab === "socks" ? "active" : " "} onClick={() => {this.toggle("dashboard")}}>
              <FontAwesomeIcon icon="chart-line" />
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  };
};

export default Pills;
