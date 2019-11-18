import React from 'react';
import {
  FormGroup,
  CustomInput
} from 'reactstrap';

const RadioButtons = (props) => {
  return (
    <div className="component">
      <p className="lead">Radio Buttons</p>
      <FormGroup>
        <div>
          <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Glastonbury" defaultChecked />
          <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Coachella" />
          <CustomInput type="radio" id="exampleCustomRadio3" label="Primavera" disabled defaultChecked />
          <CustomInput type="radio" id="exampleCustomRadio4" label="Burning Man" disabled />
        </div>
      </FormGroup>
    </div>
  );
}
export default RadioButtons;
