import React from 'react';
import {
  FormGroup,
  CustomInput
} from 'reactstrap';

const ToggleButtons = (props) => {
  return (
    <div className="component">
      <p className="lead">Toggle Buttons</p>
      <FormGroup>
        <div>
          <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Music" defaultChecked />
          <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch" label="Movies" />
          <CustomInput type="switch" id="exampleCustomSwitch3" label="Crafts" disabled defaultChecked />
          <CustomInput type="switch" id="exampleCustomSwitch4" label="DIY" disabled />
        </div>
      </FormGroup>
    </div>
  );
}
export default ToggleButtons;
