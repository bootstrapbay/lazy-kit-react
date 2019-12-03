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
