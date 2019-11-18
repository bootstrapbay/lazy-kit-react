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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Buttons = (props) => {
  let btnOptions = ["primary", "secondary", "success", "info", "warning", "danger", "light", "dark"];
  let simpleButtons = btnOptions.map( (op, index) => {
    return (
      [<Button color={op} key={`simpleButton-${index}`}>{op}</Button>, " "]
    );
  });
  let outlineButtons = btnOptions.map( (op, index) => {
    return (
      [<Button color={op} outline key={`outlineButton-${index}`}>{op}</Button>, " "]
    );
  });
  let pillButtons = btnOptions.map( (op, index) => {
    return (
      [<Button color={op} className="btn-pill" key={`outlineButton-${index}`}>{op}</Button>, " "]
    );
  });
  let outlinePillButtons = btnOptions.map( (op, index) => {
    return (
      [<Button color={op} className="btn-pill" outline key={`outlineButton-${index}`}>{op}</Button>, " "]
    );
  });

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
    <div className="section">
      <Row>
        <Col xs="12" md={{size: 8, offset: 2}}>
          <div className="header">
            <h2 id="buttons">Buttons</h2>
            <p>The Bootstrap 4 buttons have been modified to fit the new colours and style. There is also a new button style for icons only.</p>
          </div>

          <div className="buttons">
            <div className="component">
              <p className="lead">Simple</p>
              {simpleButtons}
              <br /><br />
              {outlineButtons}
            </div>
            <div className="component">
              <p className="lead">Pill Shaped</p>
              {pillButtons}
              <br /><br />
              {outlinePillButtons}
            </div>
            <div className="component">
              <p className="lead">With Icons</p>
              <Button color="success">
                <FontAwesomeIcon icon="heart" /> {" "}
                Simple
              </Button> {" "}
              <Button color="success" outline>
                <FontAwesomeIcon icon="heart" /> {" "}
                Outline
              </Button> {" "}
              <Button color="success" className="btn-pill">
                <FontAwesomeIcon icon="heart" /> {" "}
                Pill
              </Button> {" "}
              <Button color="success" outline className="btn-pill">
                <FontAwesomeIcon icon="heart" /> {" "}
                Outline Pill
              </Button> {" "}
              <Button color="success" className="btn-icon">
                <FontAwesomeIcon icon="heart" /> {" "}
              </Button> {" "}
              <Button color="success" outline className="btn-icon">
                <FontAwesomeIcon icon="heart" /> {" "}
              </Button> {" "}
            </div>
            <div className="component">
              <p className="lead">With Dropdown</p>
              {dropdowns}
            </div>
            <div className="component">
              <p className="lead">Sizes</p>
              <Button color="danger" size="lg">
                Large Button
              </Button> {" "}
              <Button color="danger" outline size="lg" className="btn-icon">
                <FontAwesomeIcon icon="heart" /> {" "}
              </Button> {" "}
              <Button color="danger">
                Default Button
              </Button> {" "}
              <Button color="danger" outline className="btn-icon">
                <FontAwesomeIcon icon="heart" /> {" "}
              </Button> {" "}
              <Button color="danger" size="sm">
                Small Button
              </Button> {" "}
              <Button color="danger" outline size="sm" className="btn-icon">
                <FontAwesomeIcon icon="heart" /> {" "}
              </Button> {" "}
            </div>
          </div>
        </Col>
      </Row>

    </div>
  );
};

export default Buttons;
