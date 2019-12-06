import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';
import Tabs from './../navigation/Tabs';
import Pills from './../navigation/Pills';

const PNavigation = (props) => {
  return (
    <div className="section">
      <Row>
        <Col xs="12" md={{size: 8, offset: 2}}>
          <div className="page-header">
            <h2 id="navs">Navigation</h2>
            <p>Having to organise a list of links is a very common situation and knowing how to use the Reactstrap Navs will help you solve this.</p>
          </div>
          <div className="component">
            <p className="lead">Nav Tabs</p>
            <Tabs />
          </div>
          <div className="component">
            <p className="lead">Nav Pills</p>
            <Pills />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PNavigation;
