import React from 'react';
import Prism from "prismjs";
import LazyBreadcrumbs  from "./../../components/indicators/Breadcrumbs";
require('prismjs/components/prism-jsx.min');

class Alerts extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render () {
    return (
      <div>
        <h2>Breadcrumbs</h2>
        <p className="mb-5">Breadcrumbs are imported from <b>reactstrap</b> and styled with the <b>lazy kit</b>. For full documentation on how to use the Breadcrumb component, go <a href="https://reactstrap.github.io/components/breadcrumbs/" target="_blank" rel="noopener noreferrer">here</a>.</p>
        <LazyBreadcrumbs />
        <pre>
          <code className="language-jsx">
          {`
import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem
} from 'reactstrap';

const Breadcrumbs = (props) => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem active>Home</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem><a href="#a">Home</a></BreadcrumbItem>
        <BreadcrumbItem active>Library</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem><a href="#a">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#a">Library</a></BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;
          `}
          </code>
        </pre>
      </div>
    )
  }

};

export default Alerts;
