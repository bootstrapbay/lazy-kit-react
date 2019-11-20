import React from 'react';
import {
  Row,
  Container,
  Col
} from 'reactstrap';
import NavMenues from "./NavigationBars/NavMenues";
import NavBars from "./NavigationBars/NavBars";

const NavigationBars = () => {
  return (
    <div>
      <Container>
        <div className="section">
          <Row>
            <Col xs="12" md={{size: 8, offset: 2}}>
              <div className="header">
                <h2 id="navigation">Navigation Bars</h2>
                <p>The Bootstrap 4 comes packed with classes for menus and navbars. Using the knows markup you can easily create responsive navigation bars. Lazy Kit comes with a layer of styling, by adding new colours and Font Awesome Icons.</p>
              </div>
            </Col>
          </Row>
          <NavMenues />
        </div>
        <div class="section">
          <Row>
            <Col xs="12">
              <div className="page-header">
                <p className="lead">Navbars</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <NavBars />
    </div>
  );
};

export default NavigationBars;
