import React from "react";
import { Button } from 'reactstrap';

const PillButtons = (props) => {
  return (
    <div >
    <Button color="primary" className="btn-pill">Primary</Button>{" "}
    <Button color="secondary" className="btn-pill">Secondary</Button>{" "}
    <Button color="success" className="btn-pill">Success</Button>{" "}
    <Button color="info" className="btn-pill">Info</Button>{" "}
    <Button color="warning" className="btn-pill">Warning</Button>{" "}
    <Button color="danger" className="btn-pill">Danger</Button>{" "}
    <Button color="light" className="btn-pill">Light</Button>{" "}
    <Button color="dark" className="btn-pill">Dark</Button>{" "}
    <br /><br />
    <Button color="primary" outline className="btn-pill">Primary</Button>{" "}
    <Button color="secondary" outline className="btn-pill">Secondary</Button>{" "}
    <Button color="success" outline className="btn-pill">Success</Button>{" "}
    <Button color="info" outline className="btn-pill">Info</Button>{" "}
    <Button color="warning" outline className="btn-pill">Warning</Button>{" "}
    <Button color="danger" outline className="btn-pill">Danger</Button>{" "}
    <Button color="light" outline className="btn-pill">Light</Button>{" "}
    <Button color="dark" outline className="btn-pill">Dark</Button>{" "}
    </div>
  );
};

export default PillButtons;
