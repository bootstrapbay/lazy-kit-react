import React from "react";
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SizedButtons = (props) => {
  return (
    <div>
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
  );
};

export default SizedButtons;
