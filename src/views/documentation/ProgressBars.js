import React from 'react';
import Prism from "prismjs";
import PrismJsx from 'prismjs/components/prism-jsx.min';
import LazyProgress  from "./../../components/indicators/ProgressBars";

class ProgressBars extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render () {
    return (
      <div>
        <h2>Progress Bars</h2>
        <p className="mb-5">Progress bars are imported from <b>reactstrap</b> and styled with the <b>lazy kit</b>. For full documentation on how to use the Progress bar component, go <a href="https://reactstrap.github.io/components/progress/" target="_blank">here</a>.</p>
        <LazyProgress />
        <pre>
          <code className="language-jsx">
          {`
import React from 'react';
import { Progress } from 'reactstrap';

const ProgressBars = (props) => {
  return (
    <div>
      <Progress value={2 * 5} />
      <Progress color="success" value="25" />
      <Progress color="info" value={50} />
      <Progress color="warning" value={75} />
      <Progress color="danger" value="100" />
    </div>
  );
};

export default ProgressBars;
          `}
          </code>
        </pre>
      </div>
    )
  }

};

export default ProgressBars;
