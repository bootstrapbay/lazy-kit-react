import React from 'react';
import {
  Col,
  Row,
  FormGroup,
  Input,
  FormFeedback
} from 'reactstrap';


const InputsWithValidation = () => {
  return (
    <div className="component">
      <p className="lead">With Validation</p>
      <Row>
        <Col xs="12" lg="6">
          <FormGroup>
            <Input type="text" defaultValue="correct value" valid id="inputInvalid" />
            <FormFeedback valid={true}>Success! You've done it.</FormFeedback>
          </FormGroup>
        </Col>
        <Col xs="12" lg="6">
          <FormGroup>
            <Input type="text" defaultValue="wrong value" invalid id="inputInvalid" />
            <FormFeedback valid={false}>Sorry, that username's taken. Try another?</FormFeedback>
          </FormGroup>
        </Col>
      </Row>
    </div>
  );
}

export default InputsWithValidation;
