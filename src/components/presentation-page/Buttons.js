import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Col,
  Container,
  Row
 } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Buttons = (props) => (
  <div class="section">
    <div class="row">
      <div class="col-12 col-md-8 offset-md-2">
        <div class="header">
          <h2 id="buttons">Buttons</h2>
          <p>The Bootstrap 4 buttons have been modified to fit the new colours and style. There is also a new button style for icons only.</p>

        </div>
        <div class="buttons">
          <div class="component">
            <p class="lead">Simple</p>
            <button type="button" class="btn btn-primary">Primary</button>
            <button type="button" class="btn btn-secondary">Secondary</button>
            <button type="button" class="btn btn-success">Success</button>
            <button type="button" class="btn btn-info">Info</button>
            <button type="button" class="btn btn-warning">Warning</button>
            <button type="button" class="btn btn-danger">Danger</button>
            <button type="button" class="btn btn-light">Light</button>
            <button type="button" class="btn btn-dark">Dark</button>
          </div>
          <div class="component">
            <button type="button" class="btn btn-outline-primary">Primary</button>
            <button type="button" class="btn btn-outline-secondary">Secondary</button>
            <button type="button" class="btn btn-outline-success">Success</button>
            <button type="button" class="btn btn-outline-info">Info</button>
            <button type="button" class="btn btn-outline-warning">Warning</button>
            <button type="button" class="btn btn-outline-danger">Danger</button>
            <button type="button" class="btn btn-outline-light">Light</button>
            <button type="button" class="btn btn-outline-dark">Dark</button>
          </div>
          <div class="component">
            <p class="lead">Pill Shaped</p>
            <button type="button" class="btn btn-primary btn-pill">Primary</button>
            <button type="button" class="btn btn-secondary btn-pill">Secondary</button>
            <button type="button" class="btn btn-success btn-pill">Success</button>
            <button type="button" class="btn btn-info btn-pill">Info</button>
            <button type="button" class="btn btn-warning btn-pill">Warning</button>
            <button type="button" class="btn btn-danger btn-pill">Danger</button>
            <button type="button" class="btn btn-light btn-pill">Light</button>
            <button type="button" class="btn btn-dark btn-pill">Dark</button>
          </div>
          <div class="component">
            <button type="button" class="btn btn-outline-primary btn-pill">Primary</button>
            <button type="button" class="btn btn-outline-secondary btn-pill">Secondary</button>
            <button type="button" class="btn btn-outline-success btn-pill">Success</button>
            <button type="button" class="btn btn-outline-info btn-pill">Info</button>
            <button type="button" class="btn btn-outline-warning btn-pill">Warning</button>
            <button type="button" class="btn btn-outline-danger btn-pill">Danger</button>
            <button type="button" class="btn btn-outline-light btn-pill">Light</button>
            <button type="button" class="btn btn-outline-dark btn-pill">Dark</button>
          </div>
          <div class="component">
            <p class="lead">With Icons</p>
            <button type="button" class="btn btn-success"><i class="fas fa-heart"></i> Simple</button>
            <button type="button" class="btn btn-outline-success"><i class="fas fa-heart"></i> Outline</button>
            <button type="button" class="btn btn-success btn-pill"><i class="fas fa-heart"></i> Pill</button>
            <button type="button" class="btn btn-outline-success btn-pill"><i class="fas fa-heart"></i> Outline Pill</button>
            <button type="button" class="btn btn-success btn-icon"><i class="fas fa-heart"></i></button>
            <button type="button" class="btn btn-outline-success btn-icon"><i class="fas fa-heart"></i></button>
          </div>



          <div class="component mb-3">
            <p class="lead">With Dropdown</p>
            <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
              <button type="button" class="btn btn-primary">Primary</button>
              <div class="btn-group" role="group">
                <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <a class="dropdown-item" href="#">Dropdown link</a>
                  <a class="dropdown-item" href="#">Dropdown link</a>
                </div>
              </div>
            </div>

            <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
              <button type="button" class="btn btn-success">Success</button>
              <div class="btn-group" role="group">
                <button id="btnGroupDrop2" type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                <div class="dropdown-menu" aria-labelledby="btnGroupDrop2">
                  <a class="dropdown-item" href="#">Dropdown link</a>
                  <a class="dropdown-item" href="#">Dropdown link</a>
                </div>
              </div>
            </div>

            <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
              <button type="button" class="btn btn-info">Info</button>
              <div class="btn-group" role="group">
                <button id="btnGroupDrop3" type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                <div class="dropdown-menu" aria-labelledby="btnGroupDrop3">
                  <a class="dropdown-item" href="#">Dropdown link</a>
                  <a class="dropdown-item" href="#">Dropdown link</a>
                </div>
              </div>
            </div>

            <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
              <button type="button" class="btn btn-danger">Danger</button>
              <div class="btn-group" role="group">
                <button id="btnGroupDrop4" type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                <div class="dropdown-menu" aria-labelledby="btnGroupDrop4">
                  <a class="dropdown-item" href="#">Dropdown link</a>
                  <a class="dropdown-item" href="#">Dropdown link</a>
                </div>
              </div>
            </div>
          </div>

          <div class="component">
            <p class="lead">Sizes</p>
            <button type="button" class="btn btn-danger btn-lg">Large button</button>
            <button type="button" class="btn btn-outline-danger btn-icon btn-lg"><i class="fas fa-heart"></i></button>
            <button type="button" class="btn btn-danger">Default button</button>
            <button type="button" class="btn btn-outline-danger btn-icon"><i class="fas fa-heart"></i></button>
            <button type="button" class="btn btn-danger btn-sm">Small button</button>
            <button type="button" class="btn btn-outline-danger btn-icon btn-sm"><i class="fas fa-heart"></i></button>
          </div>

      </div>

      </div>
    </div>
  </div>
);

Buttons.propTypes = {
  title: PropTypes.string
};

Buttons.defaultProps = {
  title: "Lazy Kit"
};

export default Buttons;
