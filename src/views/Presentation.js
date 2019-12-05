import React from 'react';
import {
  Col,
  Container,
  Row
} from 'reactstrap';
import PNavbar from "./../components/presentation/PNavbar";
import PHeader from "./../components/presentation/PHeader";
import PColours from "./../components/presentation/PColours";
import PButtons from "./../components/presentation/PButtons";
import PForms from "./../components/presentation/PForms";
import PTypography from "./../components/presentation/PTypography";
import PImages from "./../components/presentation/PImages";
import PNavigationBars from "./../components/presentation/PNavigationBars";
import PTables from "./../components/presentation/PTables";
import PNavigation from "./../components/presentation/PNavigation";
import PIndicators from "./../components/presentation/PIndicators";
import Alerts from "./../components/Alerts";
import PCards from "./../components/presentation/PCards";
import PTooltipsAndPopovers from "./../components/presentation/PTooltipsAndPopovers";
import LazyModal from "./../components/LazyModal";
import PExamples from "./../components/presentation/PExamples";
import PReadDocs from "./../components/presentation/PReadDocs";
import PCTA from "./../components/presentation/PCTA";

class Presentation extends React.Component {
  render() {
    return (
      <div className="index">
        <PNavbar />
        <PHeader />

        <div className="intro bg-light">
          <Container className="section desc">
      	    <Row>
      		    <Col xs="12" md={{size: 8, offset: 2}}>
  							<p className="lead">
                  <b>{this.props.title}</b> {" "}
                  {this.props.description}
                </p>
      		    </Col>
      	    </Row>

            <PColours />
            <PButtons />
          </Container>
        </div>

        <Container>
          <PForms />
          <PTypography />
          <PImages />
        </Container>

        <PNavigationBars />

        <Container>
          <PTables />
          <PNavigation />
          <PIndicators />

          <div className="section">
            <Row>
              <Col xs="12" md={{size: 8, offset: 2}}>
                <div className="header">
                  <h2 id="alerts">Alerts</h2>
                  <p>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
                </div>
              </Col>
            </Row>
            <Alerts />
          </div>

          <PCards />
          <PTooltipsAndPopovers />

          <div className="section">
            <Row>
              <Col xs="12" md={{size: 8, offset: 2}}>
                <div className="header">
                  <h2 id="modals">Modals</h2>
                  <p>Use the modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.</p>
                </div>

                 <div className="component">
                  <LazyModal />
                 </div>
              </Col>
            </Row>
          </div>

        </Container>
        <PExamples />
        <PReadDocs />
        <PCTA />
      </div>
    );
  };
};

Presentation.defaultProps = {
  title: "Lazy kit",
  description: "is a complete design system built with React.JS and Reactstrap. It is created for all web makers that want to get a project off the ground quickly and neatly. It overwrites the styles for the Reactstrap components and adds 2 more plugins. It also comes with 3 example pages."
};

export default Presentation;
