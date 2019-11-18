import React from 'react';
import {
  Button,
  Col,
  Container,
  Row
} from "reactstrap";
import ThinkingEmoji from "./../../assets/img/gifs/thinking.gif";

const ReadDocs = (props) => {
  return (
    <div className="documentation section bg-white text-center">
      <Container>
      	<Row>
      		<Col lg={{size: 8, offset: 2}}>
      			<div className="emoji mb-3">
      				<img src={ThinkingEmoji} width="50" alt="ThinkingEmoji"/>
      			</div>
      		  <h1>Read the Docs</h1>
      		  <p className="lead">
              Check out the documentation for every element in order to fully see its possibilities. You will find examples for every component and the variations that it comes with.
            </p>
      		  <Button color="primary" size="lg" outline className="mt-4" href="documentation/getting_started.html" target="_blank">
              See Documentation
            </Button>
      		</Col>
      	</Row>
      </Container>
    </div>
  );
};

export default ReadDocs;
