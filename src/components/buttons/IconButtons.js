import React from "react";
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconButtons = (props) => {
  return (
    <div>
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
  );
};

export default IconButtons;
