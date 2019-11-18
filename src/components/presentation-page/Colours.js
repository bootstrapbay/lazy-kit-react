import React from "react";
import {
  Col,
  Row
 } from 'reactstrap';
 import ColourCard from "./ColourCard";

const Colours = (props) => {
  let colours = [
    {name: "primary", colour: "#611F6A"},
    {name: "secondary", colour: "#071D5C"},
    {name: "success", colour: "#007A5B"},
    {name: "info", colour: "#1264A4"},
    {name: "warning", colour: "#ECB22F"},
    {name: "danger", colour: "#E01E5B"},
    {name: "dark", colour: "#212529"},
    {name: "light", colour: "#EBEAEB"}
  ]
  let cards = colours.map((p, index) => {
    return (
      <Col xs="12" sm="6" lg="3" key={`colour-${index}`}>
        <ColourCard name={p.name} colour={p.colour} />
      </Col>
    );
  });

  return (
    <div className="section">
      <Row>
        <Col xs="12" md={{size: 8, offset: 2}}>
          <div className="page-header mb-5">
            <h2 id="colours">Colours</h2>
            <p>We have improved the Bootstrap colour selection with a brighter variation. All the components from the kit will have variations for each one of this contextual classes.</p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12" lg={{size: 10, offset: 1}}>
          <Row>
            {cards}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Colours;
