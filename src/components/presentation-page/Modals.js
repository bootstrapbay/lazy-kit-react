import React from 'react';
import {
  Row,
  Col,
  Button
} from 'reactstrap';

const Modals = () => {
  return (
    <div className="section">
      <Row>
        <Col xs="12" md={{size: 8, offset: 2}}>
          <div className="header">
            <h2 id="modals">Modals</h2>
            <p>Use the modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.</p>
          </div>
           <div className="component">
            <Button color="info" data-toggle="modal" data-target="#glassAnimals">
              Click for More
            </Button>
           </div>
        </Col>
      </Row>
    </div>
  );
};

export default Modals;
