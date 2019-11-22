import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';
import Breadcrumbs from './Indicators/Breadcrumbs';
import Pags from './Indicators/Pags';
import Badges from './Indicators/Badges';
import ProgressBars from './Indicators/ProgressBars';

const Indicators = (props) => {
  return (
    <div className="section">
      <Row>
        <Col xs="12" md={{size: 8, offset: 2}}>
          <div className="header">
            <h2 id="indicators">Indicators</h2>
            <p>Indicators are useful elements that can help you keep your users informed. Breadcrumbs and pagination let you know about your current page. Badged and progress bars give extra information about the information you are currently viewing.</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="12" md="6">
          <Breadcrumbs />
        </Col>
        <Col xs="12" md="6">
          <Pags />
        </Col>
        <Col xs="12" md="6">
          <Badges />
        </Col>
        <Col xs="12" md="6">
          <ProgressBars />
        </Col>
      </Row>
    </div>
  );
};

export default Indicators;
