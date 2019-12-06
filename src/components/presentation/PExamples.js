import React from 'react';
import {
  Col,
  Container,
  Row
} from "reactstrap";
import ExampleCard from "./ExampleCard";

const PExamples = (props) => {
  return (
    <div className="examples section bg-light">
      <Container>
        <Row>
          <Col xs="12" className="text-center">
            <h1>Examples</h1>
            <p className="lead">Besides all the redesigned elements, we have also created 3 example pages! <br /> They will give you a better idea of what you can build with the kit :) </p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6">
            <ExampleCard name="Register Page" image="register.png" link="/register" />
          </Col>
          <Col xs="12" md="6">
            <ExampleCard name="Profile Page" image="profile.png" link="/profile" />
          </Col>
          <Col xs="12" md={{size: 6, offset: 3}}>
            <ExampleCard name="Landing Page" image="landing.png" link="/landing" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PExamples;
