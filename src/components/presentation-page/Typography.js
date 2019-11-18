import React from 'react';
import {
  Col,
  Row
} from 'reactstrap';
import Headings from "./Typography/Headings";
import Paragraphs from "./Typography/Paragraphs";

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
              <Headings />
              <Paragraphs />
            </div>
          </Col>
        </Row>
    </div>
  );
};
export default Typography;
