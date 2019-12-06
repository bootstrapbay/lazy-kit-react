import React from 'react';
import {
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconInputs = () => {
  return (
    <div>
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
    </div>
  );
}

export default IconInputs;
