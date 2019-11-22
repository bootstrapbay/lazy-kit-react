import React from 'react';
import {
  Row,
  Col,
  Table
} from 'reactstrap';

const Tables = (props) => {
  return (
    <div className="section">
      <Row>
        <Col xs="12" md={{size: 8, offset: 2}}>
          <div className="page-header">
            <h2 id="tables">Tables</h2>
            <p>Tables get a new look inside the Lazy Kit. Using contextual classes you can colour rows and cells.</p>
          </div>

          <div className="component">
            <Table hover>
              <thead>
                <tr>
                  <th scope="col">Type</th>
                  <th scope="col">Column heading</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-light">
                  <th scope="row">Light</th>
                  <td>Let it be.</td>
                </tr>
                <tr className="table-active">
                  <th scope="row">Active</th>
                  <td>Eat well, feel well.</td>
                </tr>
                <tr className="table-dark">
                  <th scope="row">Dark</th>
                  <td>But first coffee.</td>
                </tr>
                <tr className="table-primary">
                  <th scope="row">Primary</th>
                  <td>Think before you speak.</td>
                </tr>
                <tr className="table-secondary">
                  <th scope="row">Secondary</th>
                  <td>Carpe diem.</td>
                </tr>
                <tr className="table-success">
                  <th scope="row">Success</th>
                  <td>Success. It’s a Mind Game.</td>
                </tr>
                <tr className="table-danger">
                  <th scope="row">Danger</th>
                  <td>One day at a time.</td>
                </tr>
                <tr className="table-warning">
                  <th scope="row">Warning</th>
                  <td>Good vibes only.</td>
                </tr>
                <tr className="table-info">
                  <th scope="row">Info</th>
                  <td>All you need is sleep.</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Tables;
