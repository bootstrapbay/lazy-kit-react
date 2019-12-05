import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import RNavbar from './../components/register/RNavbar';
import RForm from './../components/register/RForm';
import RBackgroundImage from './../components/register/RBackgroundImage';

class Register extends React.Component {
  render() {
    return (
        <div className="register">
          <RNavbar />
          <Container fluid={true}>
            <Row>
          	  <Col xs="12" md={{size: 4, offset: 1}}>
                <RForm />
              </Col>
              <Col xs="12" md={{size: 6, offset: 1}} className="d-flex">
                <RBackgroundImage image="dog-9.jpg" />
              </Col>
            </Row>
          </Container>
        </div>
    );
  };
};

export default Register;
