import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

const LContact = () => {
  return (
    <div className="contact">
      <div className="cta bg-primary text-center text-white">
        <h1 className="text-white">Contact Us</h1>
        <p classNAme="lead">Let us know what you think. We will get back to you within a day.</p>
      </div>
      <div className="bg-light">
        <Container>
    	    <Row>
    		    <Col xs="12" md={{size: 8, offset: 2}}>
    			    <Card className="no-hover">
    				    <CardBody className="p-5">
    							<Form>
    							    <FormGroup>
    							      <Label>Your name</Label>
    							      <Input type="email" bsSize="lg" placeholder="Enter name" />
    							    </FormGroup>
    							    <FormGroup>
    							      <Label>Your email address</Label>
    							      <Input type="email" bsSize="lg" placeholder="Enter email" />
    							    </FormGroup>
    							    <FormGroup>
    							      <Label>Your message</Label>
    							      <Input type="textarea" rows="5"></Input>
    							    </FormGroup>
    							    <div className="text-center mt-5">
    							   	 <Button type="submit" color="primary" size="lg">Send Message</Button>
    							    </div>
    							</Form>
    				    </CardBody>
    			    </Card>
    		    </Col>
    	    </Row>
        </Container>
      </div>
    </div>
  );
};

export default LContact;
