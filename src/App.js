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

// creating a library with the Font Awesome icons we use through the kit
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faDownload } from '@fortawesome/free-solid-svg-icons';
library.add(faHeart, faDownload);

class App extends React.Component {
  render() {
    return (
      <div class="index">
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

          </Container>
        </div>
      </div>
    );
  };
};

App.defaultProps = {
  title: "Lazy kit",
  description: "is a complete design system built on Bootstrap 4. It is created for all web makers that want to get a project off the ground quickly and neatly. It overwrites all Bootstrap 4 components and adds 2 more plugins. It also comes with 3 example pages."
};


export default App;
