import React from 'react';
import Prism from 'prismjs';
import LazySliders  from "./../../components/form-inputs/Sliders";
require('prismjs/components/prism-jsx.min');

class Sliders extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render () {
    return (
      <div>
        <h2>Sliders</h2>
        <p className="mb-5">Sliders are imported from <b>nouislider-react</b> and styled with the <b>lazy kit</b>. For full documentation on how to use the Slider component, go <a href="https://www.npmjs.com/package/nouislider-react" target="_blank" rel="noopener noreferrer">here</a>.</p>
        <p>Here is an example with how sliders look.</p>
        <LazySliders />
        <pre>
          <code className="language-jsx">
          {`
import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

class Sliders extends React.Component {
  render() {
    return (
      <Row>
        <Col xs="12" lg="6">
          <div>
             <Nouislider range={{ min: 0, max: 100 }} start={[0]} connect={[true, false]} />
          </div>
        </Col>
        <Col xs="12" lg="6">
          <Nouislider range={{ min: 0, max: 100 }} start={[20, 60]} connect />
        </Col>
      </Row>
    );
  };
}
export default Sliders;
          `}
          </code>
        </pre>
      </div>
    )
  }

};

export default Sliders;
