import React from 'react';
import Prism from 'prismjs';
import LazyBadges  from './../../components/indicators/Badges';
require('prismjs/components/prism-jsx.min');

class Badges extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render () {
    return (
      <div>
        <h2>Badges</h2>
        <p className="mb-5">Badges are imported from <b>reactstrap</b> and styled with the <b>lazy kit</b>. For full documentation on how to use the Badge component, go <a href="https://reactstrap.github.io/components/badge/" target="_blank" rel="noopener noreferrer">here</a>.</p>
        <LazyBadges />
        <pre>
          <code className="language-jsx">
          {`
import React from 'react';
import { Badge } from 'reactstrap';

const Badges = (props) => {
  return (
    <div>
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
          `}
          </code>
        </pre>
      </div>
    )
  }

};

export default Badges;
