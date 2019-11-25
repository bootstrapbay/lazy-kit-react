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
      <div className="component">
        <p className="lead">Sliders</p>
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

      </div>
    );
  };
}
export default Sliders;
