import React from 'react';
import {
  UncontrolledAlert
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Alerts = (props) => {
  return (
      <div className="component">
        <UncontrolledAlert color="info">
          <FontAwesomeIcon icon="info" />{" "}
          <strong>Hey!</strong> I think you should know <a href="#a">this</a>.
        </UncontrolledAlert>
        <UncontrolledAlert color="success">
          <FontAwesomeIcon icon="check" />{" "}
          <strong>Yay!</strong> Everything is fine! You can go back to your <a href="#a">page</a>.
        </UncontrolledAlert>
        <UncontrolledAlert color="warning">
          <FontAwesomeIcon icon="download" />{" "}
          <strong>Oops!</strong> Something might be wrong. Make a quick <a href="#a">test</a>!
        </UncontrolledAlert>
        <UncontrolledAlert color="danger">
          <FontAwesomeIcon icon="exclamation-circle" />{" "}
          <strong>On no!</strong> Something really bad happened! Clear the premises and go <a href="#a">somewhere safe</a>!
        </UncontrolledAlert>
      </div>
  );
};

export default Alerts;
