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
