import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';
import Tabs from './Navigation/Tabs';
import Pills from './Navigation/Pills';

const Navigation = (props) => {
  return (
    <div className="section">
      <Row>
        <Col xs="12" md={{size: 8, offset: 2}}>
          <div className="page-header">
            <h2 id="navs">Navigation</h2>
            <p>Having to organise a list of links is a very common situation and knowing how to create Bootstrap 4 Navs will help you solve this.</p>
          </div>
          <Tabs />
          <Pills />
        </Col>
      </Row>
    </div>
  );
};

export default Navigation;
