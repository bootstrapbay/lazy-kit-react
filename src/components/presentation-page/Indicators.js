import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';
import Breadcrumbs from './../indicators/Breadcrumbs';
import Pags from './../indicators/Pags';
import Badges from './../indicators/Badges';
import ProgressBars from './../indicators/ProgressBars';

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
          <div className="component">
            <p className="lead">Breadcrumbs</p>
            <Breadcrumbs />
          </div>
        </Col>
        <Col xs="12" md="6">
          <div className="component">
            <p className="lead">Pagination</p>
            <Pags />
          </div>
        </Col>
        <Col xs="12" md="6">
          <div className="component">
            <p className="lead">Badges</p>
            <Badges />
          </div>
        </Col>
        <Col xs="12" md="6">
          <div className="component">
            <p className="lead">Progress Bars</p>
            <ProgressBars />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Indicators;
