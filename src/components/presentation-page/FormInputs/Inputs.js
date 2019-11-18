import React from 'react';
import {
  Col,
  Row,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Inputs = () => {
  return (
    <div className="component">
      <Row>
        <Col xs="12" lg="6" >
          <p className="lead pt-3">Default</p>
          <FormGroup>
            <Input type="email" id="email" placeholder="Your Email Address" />
          </FormGroup>

          <FormGroup>
            <Input id="disabledInput" type="text" placeholder="Disabled input here..." disabled={true} />
          </FormGroup>
        </Col>
        <Col xs="12" lg="6">
          <p className="lead pt-3">With Icons</p>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText id="basic-addon1">
                <FontAwesomeIcon icon="user" />
              </InputGroupText>
            </InputGroupAddon>
            <Input type="text" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          </InputGroup>

          <InputGroup className="mt-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText id="basic-addon1" className="disabled">
                <FontAwesomeIcon icon="key" />
              </InputGroupText>
            </InputGroupAddon>
            <Input type="text" placeholder="Username" aria-label="Username" aria-describedby="basic-addon2" disabled={true} />
          </InputGroup>
        </Col>
      </Row>
    </div>
  );
}

export default Inputs;
