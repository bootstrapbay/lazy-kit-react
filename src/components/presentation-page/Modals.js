import React from 'react';
import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

class Modals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  render() {
    return (
      <div className="section">
        <Row>
          <Col xs="12" md={{size: 8, offset: 2}}>
            <div className="header">
              <h2 id="modals">Modals</h2>
              <p>Use the modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.</p>
            </div>
             <div className="component">
              <Button color="info" onClick={this.toggle}>
                Click for More
              </Button>
             </div>
          </Col>
        </Row>

        <Modal isOpen={this.state.modalOpen} toggle={this.toggle} className="modal-dialog-centered">
          <ModalHeader toggle={this.toggle}>Here is a modal</ModalHeader>
          <ModalBody>
            Modals are a simple way to display information upon request. They let you easily add another layer upon your site and give you the possibility to create popups.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
            <Button color="success" onClick={this.toggle}>View More</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  };
};

export default Modals;
