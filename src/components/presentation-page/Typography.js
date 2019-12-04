import React from 'react';
import {
  Col,
  Row
} from 'reactstrap';
import Headings from "./../typography/Headings";
import Paragraphs from "./../typography/Paragraphs";
import Blockquote from "./../typography/Blockquote";

const Typography = (props) => {
  return (
    <div className="section">
        <Row>
          <Col xs="12" md={{size: 8, offset: 2}}>
            <div className="header">
              <h2 id="typography">Typography</h2>
              <p>Lazy Kit has the primary font family Raleway, provided by Google Fonts. It is an open-source font that bring a new look to the default Bootstrap.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg={{size: 8, offset: 2}}>
            <div className="section-typography">
              <div className="component">
                <p className="lead mt-4">Headings</p>
                <Headings />
              </div>

              <div className="component">
                <p className="lead mt-4">Paragraphs</p>
                <Paragraphs />
              </div>

              <Row className="py-3 align-items-center">
                <Col xs="12" sm="2">
                  <p className="text-primary">Quote</p>
                </Col>
                <Col xs="12" sm="10">
                  <Blockquote />
                </Col>
              </Row>

            </div>
          </Col>
        </Row>
    </div>
  );
};
export default Typography;
