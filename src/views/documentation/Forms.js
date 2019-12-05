import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';
import Prism from 'prismjs';
import Inputs from './../../components/form-inputs/Inputs';
import IconInputs from './../../components/form-inputs/IconInputs';
import InputsWithValidation from './../../components/form-inputs/InputsWithValidation';
import CustomInputs from './../../components/form-inputs/CustomInputs';
import CheckBoxes from './../../components/form-inputs/CheckBoxes';
import RadioButtons from './../../components/form-inputs/RadioButtons';
import ToggleButtons from './../../components/form-inputs/ToggleButtons';
require('prismjs/components/prism-jsx.min');

class Forms extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render () {
    return (
      <div>
        <h2>Forms</h2>
        <p className="mb-5">Forms are imported from <b>reactstrap</b> and styled with the <b>lazy kit</b>. For full documentation on how to use Forms, go <a href="https://reactstrap.github.io/components/form/" target="_blank" rel="noopener noreferrer">here</a>.</p>

        <h4 className="mt-5">Default Inputs</h4>
        <p>Here is how a simple input field looks like.</p>
        <Row>
          <Col xs="12" md="6">
            <Inputs />
          </Col>
        </Row>

        <pre>
          <code className="language-jsx">
          {`
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
          `}
          </code>
        </pre>
        <h4 className="mt-5">With Icons</h4>
        <p>And here is an example with icons in the addon.</p>
        <Row>
          <Col xs="12" md="6">
            <IconInputs />
          </Col>
        </Row>
        <pre>
          <code className="language-jsx">
          {`
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
          `}
          </code>
        </pre>

        <h4 className="mt-5">With Validation</h4>
        <p>Here is how validated inputs look like.</p>
        <InputsWithValidation />
        <pre>
          <code className="language-jsx">
          {`
import React from 'react';
import {
  Col,
  Row,
  FormGroup,
  Input,
  FormFeedback
} from 'reactstrap';


const InputsWithValidation = () => {
  return (
      <Row>
        <Col xs="12" lg="6">
          <FormGroup>
            <Input type="text" defaultValue="correct value" valid id="inputInvalid" />
            <FormFeedback valid={true}>Success! You've done it.</FormFeedback>
          </FormGroup>
        </Col>
        <Col xs="12" lg="6">
          <FormGroup>
            <Input type="text" defaultValue="wrong value" invalid id="inputInvalid" />
            <FormFeedback valid={false}>Sorry, that username's taken. Try another?</FormFeedback>
          </FormGroup>
        </Col>
      </Row>
  );
}

export default InputsWithValidation;
          `}
          </code>
        </pre>

        <h4 className="mt-5">Custom Inputs</h4>
        <p>Here are the components for the custom select and the custom file input.</p>
        <CustomInputs first="Custom Select" second="File Input" />
        <pre>
          <code className="language-jsx">
          {`
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
          `}
          </code>
        </pre>

        <h4 className="mt-5">Checkboxes</h4>
        <p>Here is an example with multiple options for the checkbox.</p>
        <CheckBoxes />
        <pre>
          <code className="language-jsx">
          {`
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
          `}
          </code>
        </pre>

        <h4 className="mt-5">Radio Buttons</h4>
        <p>Here is an example with multiple options for radio buttons.</p>
        <RadioButtons />
        <pre>
          <code className="language-jsx">
          {`
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
          `}
          </code>
        </pre>

        <h4 className="mt-5">Toggle Buttons</h4>
        <p>Here is an example with multiple options for toggle buttons.</p>
        <ToggleButtons />
        <pre>
          <code className="language-jsx">
          {`
import React from 'react';
import {
  FormGroup,
  CustomInput
} from 'reactstrap';

const ToggleButtons = (props) => {
  return (
    <FormGroup>
      <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Music" defaultChecked />
      <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch" label="Movies" />
      <CustomInput type="switch" id="exampleCustomSwitch3" label="Crafts" disabled defaultChecked />
      <CustomInput type="switch" id="exampleCustomSwitch4" label="DIY" disabled />
    </FormGroup>
  );
}
export default ToggleButtons;
          `}
          </code>
        </pre>

      </div>
    )
  }

};

export default Forms;
