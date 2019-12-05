import React from "react";
import {
  Row,
  Col
 } from 'reactstrap';
import SimpleButtons from './../buttons/SimpleButtons';
import PillButtons from './../buttons/PillButtons';
import IconButtons from './../buttons/IconButtons';
import SizedButtons from './../buttons/SizedButtons';
import DropdownButtons from './../buttons/DropdownButtons';

const Buttons = (props) => {
  return (
    <div className="section">
      <Row>
        <Col xs="12" md={{size: 8, offset: 2}}>
          <div className="header">
            <h2 id="buttons">Buttons</h2>
            <p>The Bootstrap 4 buttons have been modified to fit the new colours and style. There is also a new button style for icons only.</p>
          </div>

          <div className="buttons">
            <div className="component">
              <p className="lead">Simple</p>
              <SimpleButtons />
            </div>
            <div className="component">
              <p className="lead">Pill Shaped</p>
              <PillButtons />
            </div>
            <div className="component">
              <p className="lead">With Icons</p>
              <IconButtons />
            </div>
            <div className="component">
              <p className="lead">With Dropdown</p>
              <DropdownButtons />
            </div>
            <div className="component">
              <p className="lead">Sizes</p>
              <SizedButtons />
            </div>
          </div>
        </Col>
      </Row>

    </div>
  );
};

export default Buttons;
