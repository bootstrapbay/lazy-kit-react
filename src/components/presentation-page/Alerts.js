import React from 'react';
import {
  Row,
  Col,
  UncontrolledAlert
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Alerts = (props) => {
  return (
    <div className="section">
      <Row>
        <Col xs="12" md={{size: 8, offset: 2}}>
          <div className="header">
            <h2 id="alerts">Alerts</h2>
            <p>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
          </div>
        </Col>
      </Row>
      <div className="component">
        <UncontrolledAlert color="info">
          <FontAwesomeIcon icon="info" />{" "}
          <strong>Hey!</strong> I think you should know <a href="#">this</a>.
        </UncontrolledAlert>
        <UncontrolledAlert color="success">
          <FontAwesomeIcon icon="check" />{" "}
          <strong>Yay!</strong> Everything is fine! You can go back to your <a href="#">page</a>.
        </UncontrolledAlert>
        <UncontrolledAlert color="warning">
          <FontAwesomeIcon icon="download" />{" "}
          <strong>Oops!</strong> Something might be wrong. Make a quick <a href="#">test</a>!
        </UncontrolledAlert>
        <UncontrolledAlert color="danger">
          <FontAwesomeIcon icon="exclamation-circle" />{" "}
          <strong>On no!</strong> Something really bad happened! Clear the premises and go <a href="#">somewhere safe</a>!
        </UncontrolledAlert>
      </div>
    </div>
  );
};

export default Alerts;
