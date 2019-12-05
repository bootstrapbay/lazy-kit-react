import React from 'react';
import Prism from "prismjs";
import LazyDropdowns  from "./../../components/buttons/DropdownButtons";
require('prismjs/components/prism-jsx.min');

class Dropdowns extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render () {
    return (
      <div>
        <h2>Dropdowns</h2>
        <p className="mb-5">Dropdowns are imported from <b>reactstrap</b> and styled with the <b>lazy kit</b>. For full documentation on how to use the Dropdown component, go <a href="https://reactstrap.github.io/components/alerts/" target="_blank" rel="noopener noreferrer">here</a>.</p>
        <p>Here is an example with dropdowns triggered by button groups.</p>
        <LazyDropdowns />
        <pre>
          <code className="language-jsx">
          {`
import React from 'react';
import {
  Button,
  ButtonGroup,
  Col,
  Row,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from 'reactstrap';

const DropdownButtons = (props) => {
  return (
    <div >
    <UncontrolledDropdown style={{display: "inline-block"}}>
    <ButtonGroup>
      <Button color="primary">Primary</Button>
      <DropdownToggle color="primary" caret />
      <DropdownMenu>
        <DropdownItem>Dropdown Link 1</DropdownItem>
        <DropdownItem>Dropdown Link 2</DropdownItem>
      </DropdownMenu>
      </ButtonGroup>
    </UncontrolledDropdown>
    {" "}
    <UncontrolledDropdown style={{display: "inline-block"}}>
    <ButtonGroup>
      <Button color="success">Success</Button>
      <DropdownToggle color="success" caret />
      <DropdownMenu>
        <DropdownItem>Dropdown Link 1</DropdownItem>
        <DropdownItem>Dropdown Link 2</DropdownItem>
      </DropdownMenu>
      </ButtonGroup>
    </UncontrolledDropdown>
    {" "}
    <UncontrolledDropdown style={{display: "inline-block"}}>
    <ButtonGroup>
      <Button color="info">Info</Button>
      <DropdownToggle color="info" caret />
      <DropdownMenu>
        <DropdownItem>Dropdown Link 1</DropdownItem>
        <DropdownItem>Dropdown Link 2</DropdownItem>
      </DropdownMenu>
      </ButtonGroup>
    </UncontrolledDropdown>
    {" "}
    <UncontrolledDropdown style={{display: "inline-block"}}>
    <ButtonGroup>
      <Button color="danger">Danger</Button>
      <DropdownToggle color="danger" caret />
      <DropdownMenu>
        <DropdownItem>Dropdown Link 1</DropdownItem>
        <DropdownItem>Dropdown Link 2</DropdownItem>
      </DropdownMenu>
      </ButtonGroup>
    </UncontrolledDropdown>
    </div>
  );
};

export default DropdownButtons;
          `}
          </code>
        </pre>
      </div>
    )
  }

};

export default Dropdowns;
