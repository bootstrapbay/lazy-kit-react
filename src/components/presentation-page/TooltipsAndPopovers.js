import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';
import Tooltips from './../Tooltips';
import Popovers from './../Popovers';

const TooltipsAndPopovers = () => {
  return (
    <div className="section">
      <Row>
        <Col xs="12" md={{size: 8, offset: 2}}>
          <div className="header">
            <h2 id="modals">Tooltips and Popovers</h2>
            <p>Both tooltips and popovers offer an easy way to display more information on hover or click. You must enable them inside your Javascript in order to use them.</p>
          </div>
           <div className="component">
            <Row>
              <Col xs="12" md="6">
                <p className="lead">Tooltips</p>
                <Tooltips />
              </Col>
              <Col xs="12" md="6">
                <p className="lead">Popovers</p>
                <Popovers />
              </Col>
            </Row>
           </div>
        </Col>
      </Row>
    </div>
  );
};

export default TooltipsAndPopovers;
