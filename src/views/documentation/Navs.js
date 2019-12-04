import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';
import Prism from "prismjs";
import PrismJsx from 'prismjs/components/prism-jsx.min';
import LazyTabs  from "./../../components/navigation/Tabs";
import LazyPills  from "./../../components/navigation/Pills";

class Navs extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render () {
    return (
      <div>
        <h2>Navigation</h2>
        <p className="mb-5">There are two ways to create a menu with multiple links and tabs. You can use the tabs and pills. We will show you some examples with both of them.</p>

        <h4>Nav Tabs</h4>
        <p className="mb-5">Nav tabs are imported from <b>reactstrap</b> and styled with the <b>lazy kit</b>. For full documentation on how to use the Tabs component, go <a href="https://reactstrap.github.io/components/navs/" target="_blank">here</a>.</p>
        <p className="mb-5">We have created examples with simple tabs, tabs with text and icons and only icons.</p>
        <LazyTabs />

        <pre>
          <code className="language-jsx">
          {`
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
      this.activeTab !== tab && this.setState({ activeTab: tab });
    }

    render() {
    return (
      <div>
        <Nav tabs>
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
            <NavLink className={this.state.activeTab === "home" ? "active" : " "} onClick={() => {this.toggle("home")}} >
              <FontAwesomeIcon icon="tshirt" /> {" "}
              Shirts
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={this.state.activeTab === "profile" ? "active" : " "} onClick={() => {this.toggle("profile")}}>
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
            <NavLink className={this.state.activeTab === "socks" ? "active" : " "} onClick={() => {this.toggle("socks")}}>
              <FontAwesomeIcon icon="socks" /> {" "}
              Socks
            </NavLink>
          </NavItem>
        </Nav>

        <Nav tabs className="nav-info nav-icons mt-3">
          <NavItem>
            <NavLink className={this.state.activeTab === "home" ? "active" : " "} onClick={() => {this.toggle("home")}} >
              <FontAwesomeIcon icon="chess-queen" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={this.state.activeTab === "profile" ? "active" : " "} onClick={() => {this.toggle("profile")}}>
              <FontAwesomeIcon icon="chess-rook" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
                <FontAwesomeIcon icon="chess-king" /> {" "}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={this.state.activeTab === "socks" ? "active" : " "} onClick={() => {this.toggle("socks")}}>
              <FontAwesomeIcon icon="chess-knight" />
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  };
};

export default Tabs;
          `}
          </code>
        </pre>

        <h4>Nav Pills</h4>
        <p className="mb-5">Nav pills are imported from <b>reactstrap</b> and styled with the <b>lazy kit</b>. For full documentation on how to use the Pills component, go <a href="https://reactstrap.github.io/components/navs/" target="_blank">here</a>.</p>
        <p className="mb-5">We have created examples with simple pills, pills with text and icons and only icons.</p>
        <LazyPills />

        <pre>
          <code className="language-jsx">
          {`
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
      <div>
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
          `}
          </code>
        </pre>

      </div>
    )
  }

};

export default Navs;
