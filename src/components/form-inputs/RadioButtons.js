import React from 'react';
import {
  FormGroup,
  CustomInput
} from 'reactstrap';

const RadioButtons = (props) => {
  return (
    <FormGroup>
        <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Glastonbury" defaultChecked />
        <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Coachella" />
        <CustomInput type="radio" id="exampleCustomRadio3" label="Primavera" disabled defaultChecked />
        <CustomInput type="radio" id="exampleCustomRadio4" label="Burning Man" disabled />
    </FormGroup>
  );
}
export default RadioButtons;
