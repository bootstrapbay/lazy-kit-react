import React from "react";
import {
  Col,
  Container,
  Row
} from "reactstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BBLogo from "./../../assets/img/bb_logo_white.png";

const ExampleHeader = (props) => (
  <div className="page-hero bg-primary text-white" id="banner">
		<div className="bubbles d-none d-md-block">

      <div className="bubble bubble-1 rotate-bubble bg-warning"></div>
      <div className="bubble bubble-2 bubble-bottom-right bg-danger rotate-bubble"></div>
      <div className="bubble bubble-3 bubble-top-right bg-warning rotate-bubble"></div>
      <div className="bubble bubble-4 bubble-top-left bg-info rotate-bubble"></div>
      <div className="bubble bubble-5 bg-info rotate-bubble"></div>
      <div className="bubble bubble-6 bubble-bottom-right bg-danger rotate-bubble"></div>
      <div className="bubble bubble-7 bubble-top-right bg-success rotate-bubble"></div>
      <div className="bubble bubble-8 bubble-top-left bg-success rotate-bubble"></div>
      <div className="bubble bubble-9 bg-warning rotate-bubble"></div>
      <div className="bubble bubble-10 bg-danger rotate-bubble"></div>
      <div className="bubble bubble-11 bubble-bottom-right bg-info rotate-bubble"></div>
      <div className="bubble bubble-12 bubble-top-right bg-success rotate-bubble"></div>
      <div className="bubble bubble-13 bubble-top-left bg-success rotate-bubble"></div>


      <div className="circle circle-1 bg-light rotate-circle"></div>
      <div className="circle circle-2 bg-success rotate-circle"></div>
      <div className="circle circle-3 bg-danger rotate-circle"></div>
      <div className="circle circle-4 bg-info rotate-circle"></div>
      <div className="circle circle-5 bg-success rotate-circle"></div>
      <div className="circle circle-6 bg-info rotate-circle"></div>
      <div className="circle circle-7 bg-warning rotate-circle"></div>
      <div className="circle circle-8 bg-white rotate-circle"></div>
      <div className="circle circle-9 bg-warning rotate-circle"></div>
      <div className="circle circle-10 bg-danger rotate-circle"></div>
		</div>
  	<Container>
      <Row>
        <Col xs="12" lg={{size: 8, offset: 2}} className="text-center">
	          <div className="title">
	            <h1 className="display-2 text-white">Lazy Kit</h1>
	            <h4 className="text-white">A new design system for developing with less effort.</h4>
	          </div>
            <div className="credits">
							<p className="text-white mb-0 small">
                Made with
                <span className="text-danger">
                  {" "} <FontAwesomeIcon icon="heart" /> {" "}
                </span>
                by
              </p>
							<img src={BBLogo} alt="Lazy Kit" width="150" />
            </div>
        </Col>
      </Row>
    </Container>
	</div>
);

export default ExampleHeader;
