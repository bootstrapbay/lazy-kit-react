import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';
import Lorde from "./../../assets/img/lorde.png";

const PImages = (props) => {
  let imgClasses = [
    {name: "Default", cl: "rounded"},
    {name: "Round", cl: "rounded-circle"},
    {name: "Raised", cl: "rounded shadow-lg"},
    {name: "Round & Raised", cl: "rounded-circle shadow-lg"}
  ];
  let images = imgClasses.map((im, index) => {
      return (
        <Col xs="12" md="3" key={`image-${index}`}>
          <p className="lead pt-3">{im.name}</p>
          <img src={Lorde} alt="lorde" className={`img-fluid ${im.cl}`} style={{width: 150}} />
        </Col>
      );
  });
  return (
    <div className="section">
      <Row>
        <Col xs="12" md={{size: 8, offset: 2}}>
					<div className="header">
            <h2 id="images">Images</h2>
            <p>Images are displayed as blocks by default and they will take the entire width of their parent. Using the border and shadow utilities, you can adjust the image's display.</p>
          </div>
        </Col>
      </Row>
      <div className="component text-center">
        <Row>
	        <Col xs="12" lg={{size: 10, offset: 1}}>
			      <Row>
              {images}
			      </Row>
	        </Col>
        </Row>
      </div>
		</div>
  );
};

export default PImages;
