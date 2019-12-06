import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardBody
 } from 'reactstrap';

const ColourCard = (props) => (
  <Card className="no-hover color">
    <CardBody className="d-flex flex-column align-items-center">
      <div className="swatch" style={{backgroundColor: props.colour}}></div>
      <div className="title" style={{textTransform: 'capitalize'}}>{props.name}</div>
      <div className="hex text-muted">{props.colour}</div>
    </CardBody>
  </Card>
);

ColourCard.propType = {
  name: PropTypes.string,
  colour: PropTypes.string
};

ColourCard.defaultProps = {
  name: "Primary",
  colour: "#611F6A"
};

export default ColourCard;
