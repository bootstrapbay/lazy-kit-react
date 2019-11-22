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

class Tabs extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeTab: "home"
      }
      this.toggle = this.toggle.bind(this);
    }

    toggle(tab) {
      this.activeTab != tab && this.setState({ activeTab: tab });
    }

    render() {
    return (
      <div className="component">
        <p className="lead pt-3">Tabs</p>
        <Nav tabs>
          <NavItem>
            <NavLink className={this.state.activeTab === "home" && "active"} onClick={() => {this.toggle("home")}} >Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={this.state.activeTab === "profile" && "active"} onClick={() => {this.toggle("profile")}}>Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled</NavLink>
          </NavItem>
          <UncontrolledDropdown nav>
            <DropdownToggle nav caret>
              Dropdown
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
            <p>When it comes down to it, that’s what life is all about: showing up for the people you love, again and again, until you can’t show up anymore.</p>
          </TabPane>
          <TabPane tabId="profile">
            <p>There is nothing more dreadful than the habit of doubt. Doubt separates people. It is a poison that disintegrates friendships and breaks up pleasant relations. It is a thorn that irritates and hurts; it is a sword that kills.</p>
          </TabPane>
          <TabPane tabId="socks">
            <p>There is nothing more dreadful than the habit of doubt. Doubt separates people. It is a poison that disintegrates friendships and breaks up pleasant relations. It is a thorn that irritates and hurts; it is a sword that kills.</p>
          </TabPane>
        </TabContent>

        <Nav tabs className="nav-danger mt-3">
          <NavItem>
            <NavLink className={this.state.activeTab === "home" && "active"} onClick={() => {this.toggle("home")}} >
              <FontAwesomeIcon icon="tshirt" /> {" "}
              Shirts
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={this.state.activeTab === "profile" && "active"} onClick={() => {this.toggle("profile")}}>
              <FontAwesomeIcon icon="shoe-prints" /> {" "}
              Shoes
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
                <FontAwesomeIcon icon="stop-circle" /> {" "}
                Disabled
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={this.state.activeTab === "socks" && "active"} onClick={() => {this.toggle("socks")}}>
              <FontAwesomeIcon icon="socks" /> {" "}
              Socks
            </NavLink>
          </NavItem>
        </Nav>

        <Nav tabs className="nav-info nav-icons mt-3">
          <NavItem>
            <NavLink className={this.state.activeTab === "home" && "active"} onClick={() => {this.toggle("home")}} >
              <FontAwesomeIcon icon="chess-queen" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={this.state.activeTab === "profile" && "active"} onClick={() => {this.toggle("profile")}}>
              <FontAwesomeIcon icon="chess-rook" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
                <FontAwesomeIcon icon="chess-king" /> {" "}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={this.state.activeTab === "socks" && "active"} onClick={() => {this.toggle("socks")}}>
              <FontAwesomeIcon icon="chess-knight" />
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  };
};

export default Tabs;
