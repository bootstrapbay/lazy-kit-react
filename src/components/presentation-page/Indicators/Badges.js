import React from 'react';
import {
  Badge
} from 'reactstrap';

const Badges = (props) => {
  return (
    <div className="component">
      <p className="lead">Badges</p>
      <div className="mb-2">
        <Badge color="primary">Primary</Badge> {" "}
        <Badge color="secondary">Secondary</Badge>{" "}
        <Badge color="success">Success</Badge>{" "}
        <Badge color="danger">Danger</Badge>{" "}
        <Badge color="warning">Warning</Badge>{" "}
        <Badge color="info">Info</Badge>{" "}
        <Badge color="light">Light</Badge>{" "}
        <Badge color="dark">Dark</Badge>
      </div>
      <div className="mb-2">
        <Badge color="primary" pill>Primary</Badge>{" "}
        <Badge color="secondary" pill>Secondary</Badge>{" "}
        <Badge color="success" pill>Success</Badge>{" "}
        <Badge color="danger" pill>Danger</Badge>{" "}
        <Badge color="warning" pill>Warning</Badge>{" "}
        <Badge color="info" pill>Info</Badge>{" "}
        <Badge color="light" pill>Light</Badge>{" "}
        <Badge color="dark" pill>Dark</Badge>
      </div>
    </div>
  );
};

export default Badges;
