import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col
 } from 'reactstrap';

const Headings = (props) => {
  const hs = [];
  for (let i = 1; i <= 6; i++) {
    let CustomH = `h${i}`;
    let h = (
        <Row className="py-3 align-items-center" key={`heading-${i}`}>
          <Col xs="12" sm="2">
            <p className="text-primary">{`Heading ${i}`}</p>
          </Col>
          <Col xs="12" sm="10">
            <CustomH className="mt-0">{props.message}</CustomH>
          </Col>
        </Row>
      );
    hs.push(h);
  }
  return (
    <div className="headings">
      {hs}
    </div>
  );
};

Headings.propType = {
  message: PropTypes.string
};

Headings.defaultProps = {
  message: "I Was Told There'd Be Cake"
};

export default Headings;
