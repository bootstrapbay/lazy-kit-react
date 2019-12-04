import React from 'react';
import {
  Col,
  Row
} from 'reactstrap';
import Inputs from "./../form-inputs/Inputs";
import IconInputs from "./../form-inputs/IconInputs";
import InputsWithValidation from "./../form-inputs/InputsWithValidation";
import CustomInputs from "./../form-inputs/CustomInputs";
import Sliders from "./../form-inputs/Sliders";
import CheckBoxes from "./../form-inputs/CheckBoxes";
import RadioButtons from "./../form-inputs/RadioButtons";
import ToggleButtons from "./../form-inputs/ToggleButtons";

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
              <div className="component">
                <Row>
                  <Col xs="12" md="6">
                    <p className="lead">Default</p>
                    <Inputs />
                  </Col>
                  <Col xs="12" md="6">
                    <p className="lead">With Icons</p>
                    <IconInputs />
                  </Col>
                </Row>
              </div>

              <div className="component">
                <p className="lead">With Validation</p>
                <InputsWithValidation />
              </div>

              <div className="component">
                <CustomInputs first="Custom Select" second="File Input" />
              </div>

              <div className="component">
                <p className="lead">Sliders</p>
                <Sliders />
              </div>

              <div className="component">
                <Row>
                  <Col xs="12" lg="4">
                    <p className="lead">Checkboxes</p>
                    <CheckBoxes />
                  </Col>
                  <Col xs="12" lg="4">
                    <p className="lead">Radio Buttons</p>
                    <RadioButtons />
                  </Col>
                  <Col xs="12" lg="4">
                    <p className="lead">Toggle Buttons</p>
                    <ToggleButtons />
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
    </div>
  );
};
export default Forms;
