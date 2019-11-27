import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

import DNavbar from "./../components/documentation/DNavbar";
import DSidebar from "./../components/documentation/DSidebar";

const DocumentationLayout = (props) => (
  <div className="documentation">
    <DNavbar />
    <Container fluid>
      <Row>
        <Col xs="12" md="2" className="d-none d-md-block bg-light sidebar">
          <DSidebar />
        </Col>
        <Col xs="12" md={{size: 8, offset: 2}} className="content">
          {props.children}
        </Col>
      </Row>
    </Container>
  </div>
);

export default DocumentationLayout;
