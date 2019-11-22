import React from 'react';
import {
  Progress
} from 'reactstrap';

const ProgressBars = (props) => {
  return (
    <div className="component">
      <p className="lead">Progress Bars</p>
      <Progress value={2 * 5} />
      <Progress color="success" value="25" />
      <Progress color="info" value={50} />
      <Progress color="warning" value={75} />
      <Progress color="danger" value="100" />
    </div>
  );
};

export default ProgressBars;
