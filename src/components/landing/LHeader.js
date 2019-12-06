import React from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import devices from './../../assets/img/landing_devices.png';

const LHeader = () => {
  return (
    <div className="header bg-white">
    	<Container>
    		<Row>
    			<Col xs="12" md="6">
    				<h1 className="display-4">Make work easier. <br /> Start with this kit.</h1>
    				<p className="lead my-4">Design faster with this powerful and free Bootstrap 4 kit. <br /> Focus on the things that matter.</p>
    		    <Form className="form-subscribe form-inline mb-3">
    		        <FormGroup className="flex-grow-1">
    		          <Label className="sr-only" for="email4">Email</Label>
    		          <Input type="text" bsSize="lg" className="flex-grow-1 mr-2" id="email4" placeholder="Your email address..." />
    		        </FormGroup>
    		        <Button type="submit" color="primary" size="lg" className=" mt-0 mt-md-3 mt-lg-0">Subscribe</Button>
    		    </Form>
    			</Col>
    			<Col xs="12" md="6">
    				<div className="devices pl-md-4 pt-5 pt-md-0">
    					<img src={devices} alt="devices" className="img-fluid" />
    				</div>
    			</Col>
    		</Row>
    	</Container>
    </div>
  );
};

export default LHeader;
