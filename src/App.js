import React from 'react';
import {
  Col,
  Container,
  Row
} from 'reactstrap';
import ExampleNavbar from "./components/presentation-page/ExampleNavbar";
import ExampleHeader from "./components/presentation-page/ExampleHeader";
import Colours from "./components/presentation-page/Colours";
import Buttons from "./components/presentation-page/Buttons";
import Forms from "./components/presentation-page/Forms";
import Typography from "./components/presentation-page/Typography";
import Images from "./components/presentation-page/Images";
import NavigationBars from "./components/presentation-page/NavigationBars";
import Examples from "./components/presentation-page/Examples";
import ReadDocs from "./components/presentation-page/ReadDocs";
import CTA from "./components/presentation-page/CTA";
import Footer from "./components/Footer";


// creating a library with the Font Awesome icons we use through the kit
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faDownload, faUser, faKey, faGlobe, faCampground, faBinoculars, faFire, faCat, faCrow, faDog, faFish, faOtter } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookSquare, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
library.add(faHeart, faDownload, faUser, faKey, faGlobe, faCampground, faBinoculars, faFire, faCat, faCrow, faDog, faFish, faOtter, faTwitter, faFacebookSquare, faGithub, faLinkedin);

class App extends React.Component {
  render() {
    return (
      <div className="index">
        <ExampleNavbar />
        <ExampleHeader />

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

            <Colours />
            <Buttons />
          </Container>
        </div>

        <Container>
          <Forms />
          <Typography />
          <Images />
        </Container>

        <NavigationBars />

        <Container>

        </Container>
        <Examples />
        <ReadDocs />
        <CTA />
        <Footer />
      </div>
    );
  };
};

App.defaultProps = {
  title: "Lazy kit",
  description: "is a complete design system built on Bootstrap 4. It is created for all web makers that want to get a project off the ground quickly and neatly. It overwrites all Bootstrap 4 components and adds 2 more plugins. It also comes with 3 example pages."
};


export default App;
