import React from 'react';
import Prism from "prismjs";
import PrismJsx from 'prismjs/components/prism-jsx.min';
import LazyAlerts  from "./../../components/Alerts";

class Alerts extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render () {
    return (
      <div>
        <h2>Alerts</h2>
        <p className="mb-5">Alerts are imported from <b>reactstrap</b> and styled with the <b>lazy kit</b>. For full documentation on how to use the Alert component, go <a href="https://reactstrap.github.io/components/alerts/" target="_blank">here</a>.</p>
        <LazyAlerts />
        <pre>
          <code className="language-jsx">
          {`
import React from 'react';
import { UncontrolledAlert } from 'reactstrap';
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
          `}
          </code>
        </pre>
      </div>
    )
  }

};

export default Alerts;
