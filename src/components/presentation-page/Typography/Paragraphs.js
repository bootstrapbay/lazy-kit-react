import React from "react";
import PropTypes from "prop-types";
import {
  Row,
  Col
 } from 'reactstrap';

const Paragraphs = (props) => {
  let options = ["muted", "primary", "secondary", "success", "info", "warning", "danger"];
  let ps = [];
  for (let i = 0; i < options.length; i++) {
    let p = (
      <Row className="py-3 align-items-center" key={`paragraph-${i}`}>
        <Col xs="12" sm="2">
          <p className="text-primary">Text {options[i]}</p>
        </Col>
        <Col xs="12" sm="10">
          <p className={`text-${options[i]}`}>{props.message}</p>
        </Col>
      </Row>
    );
    ps.push(p);
  }

  return (
    <div className="paragraphs">
      <p className="lead mt-4">Paragraphs</p>
      <Row className="py-3 align-items-center">
        <Col xs="12" sm="2">
          <p className="text-primary">Paragraph</p>
        </Col>
        <Col xs="12" sm="10">
          <p>{props.quote}</p>
        </Col>
      </Row>

      <Row className="py-3 align-items-center">
        <Col xs="12" sm="2">
          <p className="text-primary">Lead</p>
        </Col>
        <Col xs="12" sm="10">
          <p className="lead">{props.quote}</p>
        </Col>
      </Row>

      <Row className="py-3 align-items-center">
        <Col xs="12" sm="2">
          <p className="text-primary">Quote</p>
        </Col>
        <Col xs="12" sm="10">
          <blockquote className="blockquote">
            <p className="mb-0">{props.quote}</p>
            <footer className="blockquote-footer">Dr. Seuss in
              <cite title="Source Title">Oh, The Places You'll Go!</cite>
            </footer>
          </blockquote>
        </Col>
      </Row>

      {ps}
    </div>
  );
};

Paragraphs.propType = {
  message: PropTypes.string,
  quote: PropTypes.string
};

Paragraphs.defaultProps = {
  message: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go."
};

export default Paragraphs;
