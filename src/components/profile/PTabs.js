import React from 'react';
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Button,
  Col,
  Row
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "photos"
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    this.activeTab !== tab && this.setState({ activeTab: tab });
  }

  render () {
    let photoRoutes = ["dog-4.jpg", "dog-5.jpg", "dog-6.jpg", "dog-7.jpg", "dog-8.jpg", "dog-3.jpg"]
    let photos = photoRoutes.map((p, index) => {
      let img = require(`./../../assets/img/${p}`);
      return (
        <Col xs="12" md="4">
          <img className="square" style={{backgroundImage: `url(${img})`}} />
        </Col>
      );
    });
    return (
      <div>
        <div className="navigation d-flex justify-content-center">
          <Nav tabs>
            <NavItem>
              <NavLink className={this.state.activeTab === "photos" ? "active" : " "} onClick={() => {this.toggle("photos")}} >
                <FontAwesomeIcon icon="th" /> {" "}
                Photos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={this.state.activeTab === "saved" ? "active" : " "} onClick={() => {this.toggle("saved")}}>
                <FontAwesomeIcon icon={["far", "bookmark"]} /> {" "}
                Saved
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={this.state.activeTab === "tagged" ? "active" : " "} onClick={() => {this.toggle("tagged")}}>
                <FontAwesomeIcon icon={["far", "id-badge"]} /> {" "}
                Tagged
              </NavLink>
            </NavItem>
         </Nav>
       </div>

       <TabContent activeTab={this.state.activeTab} className="profile-tabs">
         <TabPane tabId="photos">
            <Row>
              {photos}
            </Row>
            <div className="d-flex justify-content-center my-5">
              <Button href="#a" outline color="primary" className="btn-pill">Load More</Button>
            </div>
         </TabPane>
         <TabPane tabId="saved" className="text-center">
           <p className="lead">
            <span className="text-danger">
              <FontAwesomeIcon icon={["far", "frown-open"]} />
            </span> {" "}
            Nothing saved yet.
            </p>
         </TabPane>
         <TabPane tabId="tagged" className="text-center">
             <p className="lead">Help people tag you.</p>
             <Button href="#a" color="info" className="btn-pill">Find Friends</Button>
         </TabPane>
       </TabContent>
     </div>
    );
  }
};

export default PTabs;
