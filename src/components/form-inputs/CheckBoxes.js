import React from 'react';
import {
  FormGroup,
  CustomInput
} from 'reactstrap';

const CheckBoxes = (props) => {
  return (
    <FormGroup>
        <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Hozier" defaultChecked />
        <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="The 1975" />
        <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="Billie Eilish" disabled defaultChecked />
        <CustomInput type="checkbox" id="exampleCustomCheckbox4" label="Alt-J" disabled />
    </FormGroup>
  );
}
export default CheckBoxes;
