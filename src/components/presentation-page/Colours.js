import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Col,
  Container,
  Card,
  CardBody,
  Row
 } from 'reactstrap';
 import ColourCard from "./ColourCard";

const Colours = (props) => (
  <div class="section">
    <Row>
      <Col xs="12" md={{size: 8, offset: 2}}>
        <div class="page-header mb-5">
          <h2 id="colours">Colours</h2>
          <p>We have improved the Bootstrap colour selection with a brighter variation. All the components from the kit will have variations for each one of this contextual classes.</p>
        </div>
      </Col>
    </Row>

    <Row>
      <Col xs="12" lg={{size: 10, offset: 1}}>
        <Row>
	        <Col xs="12" sm="6" lg="3">
            <ColourCard name="primary" colour="#611F6A" />
	        </Col>
          <Col xs="12" sm="6" lg="3">
            <ColourCard name="secondary" colour="#071D5C" />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <ColourCard name="success" colour="#007A5B" />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <ColourCard name="info" colour="#1264A4" />
          </Col>
        </Row>

        <Row>
          <Col xs="12" sm="6" lg="3">
            <ColourCard name="warning" colour="#ECB22F" />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <ColourCard name="danger" colour="#E01E5B" />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <ColourCard name="dark" colour="#212529" />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <ColourCard name="light" colour="#EBEAEB" />
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);

export default Colours;
