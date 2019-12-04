import React from 'react';
import Prism from 'prismjs';
import PrismJsx from 'prismjs/components/prism-jsx.min';
import LazyModal  from "./../../components/LazyModal";

class Modals extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render () {
    return (
      <div>
        <h2>Modals</h2>
        <p className="mb-5">Modals are imported from <b>reactstrap</b> and styled with the <b>lazy kit</b>. For full documentation on how to use the Modal component, go <a href="https://reactstrap.github.io/components/modals/" target="_blank">here</a>.</p>
        <LazyModal />
        <pre>
          <code className="language-jsx">
          {`
import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

class LazyModal extends React.Component {
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
      <div>
        <Button color="info" onClick={this.toggle}>
          Click for More
        </Button>
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

export default LazyModal;
          `}
          </code>
        </pre>
      </div>
    )
  }

};

export default Modals;
