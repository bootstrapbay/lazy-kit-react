import React from "react";
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
  let dropdownOptions = ["primary", "success", "info", "danger"];
  let dropdowns = dropdownOptions.map((o, index) => {
    return(
      [
        <UncontrolledDropdown key={`dropdown-${index}`} style={{display: "inline-block"}}>
        <ButtonGroup>
          <Button color={o}>{o}</Button>
          <DropdownToggle color={o} caret />
          <DropdownMenu>
            <DropdownItem>Dropdown Link 1</DropdownItem>
            <DropdownItem>Dropdown Link 2</DropdownItem>
          </DropdownMenu>
          </ButtonGroup>
        </UncontrolledDropdown>,
      " "]
    );
  });
  return (
    <div >
      {dropdowns}
    </div>
  );
};

export default DropdownButtons;
