import React from "react";
import { Button } from 'reactstrap';

const SimpleButtons = (props) => {
  return (
    <div>
      <Button color="primary">Primary</Button>{" "}
      <Button color="secondary">Secondary</Button>{" "}
      <Button color="success">Success</Button>{" "}
      <Button color="info">Info</Button>{" "}
      <Button color="warning">Warning</Button>{" "}
      <Button color="danger">Danger</Button>{" "}
      <Button color="light">Light</Button>{" "}
      <Button color="dark">Dark</Button>{" "}
      <br /><br />
      <Button color="primary" outline>Primary</Button>{" "}
      <Button color="secondary" outline>Secondary</Button>{" "}
      <Button color="success" outline>Success</Button>{" "}
      <Button color="info" outline>Info</Button>{" "}
      <Button color="warning" outline>Warning</Button>{" "}
      <Button color="danger" outline>Danger</Button>{" "}
      <Button color="light" outline>Light</Button>{" "}
      <Button color="dark" outline>Dark</Button>{" "}
    </div>
  );
};

export default SimpleButtons;
