import React from 'react';
import {
  Col,
  Row,
  FormGroup,
  InputGroup,
  CustomInput
} from 'reactstrap';

const CustomInputs = (props) => {
  return (
    <Row>
      <Col xs="12" lg="6">
        <p className="lead">{props.first}</p>
        <FormGroup>
          <CustomInput type="select" name="customSelect" id="customInput">
            <option value="">Select</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </CustomInput>
        </FormGroup>
      </Col>
      <Col xs="12" lg="6">
        <p className="lead">{props.second}</p>
        <InputGroup>
         <CustomInput type="file" name="customFile" id="customFile"/>
        </InputGroup>
      </Col>
    </Row>
  );
}

export default CustomInputs;
