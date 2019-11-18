import React from 'react';
import {
  Col,
  Row
} from 'reactstrap';
import Inputs from "./FormInputs/Inputs";
import InputsWithValidation from "./FormInputs/InputsWithValidation";
import CustomInputs from "./FormInputs/CustomInputs";
import Sliders from "./FormInputs/Sliders";
import CheckBoxes from "./FormInputs/CheckBoxes";
import RadioButtons from "./FormInputs/RadioButtons";
import ToggleButtons from "./FormInputs/ToggleButtons";

const Forms = (props) => {
  return (
    <div className="section">
        <Row>
          <Col xs="12" md={{size: 8, offset: 2}}>
            <div className="header">
              <h2 id="buttons">Inputs</h2>
              <p>All form controls are improved for better contrast and visibility. Besides the Bootstrap 4 custom inputs, we have also added a special plugin for sliders.</p>
            </div>

            <div className="inputs">
              <Inputs />
              <InputsWithValidation />
              <CustomInputs />
              <Sliders />

              <Row>
                <Col xs="12" lg="4">
                  <CheckBoxes />
                </Col>
                <Col xs="12" lg="4">
                  <RadioButtons />
                </Col>
                <Col xs="12" lg="4">
                  <ToggleButtons />
                </Col>
              </Row>

            </div>
          </Col>
        </Row>
    </div>
  );
};
export default Forms;
