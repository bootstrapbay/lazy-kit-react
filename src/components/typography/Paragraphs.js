import React from 'react';
import PropTypes from 'prop-types';
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

      <Row className="py-3 align-items-center">
        <Col xs="12" sm="2">
          <p className="text-primary">Paragraph</p>
        </Col>
        <Col xs="12" sm="10">
          <p>{props.message}</p>
        </Col>
      </Row>

      <Row className="py-3 align-items-center">
        <Col xs="12" sm="2">
          <p className="text-primary">Lead</p>
        </Col>
        <Col xs="12" sm="10">
          <p className="lead">{props.message}</p>
        </Col>
      </Row>
      {ps}
    </div>
  );
};

Paragraphs.propType = {
  message: PropTypes.string
};

Paragraphs.defaultProps = {
  message: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
};

export default Paragraphs;
