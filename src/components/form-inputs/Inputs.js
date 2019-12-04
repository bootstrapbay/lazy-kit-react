import React from 'react';
import {
  FormGroup,
  Input
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Inputs = () => {
  return (
    <div>
      <FormGroup>
        <Input type="email" id="email" placeholder="Your Email Address" />
      </FormGroup>

      <FormGroup>
        <Input id="disabledInput" type="text" placeholder="Disabled input here..." disabled={true} />
      </FormGroup>
    </div>
  );
}

export default Inputs;
