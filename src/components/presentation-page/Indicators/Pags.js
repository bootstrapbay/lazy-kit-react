import React from 'react';
import {
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';

const Pags = (props) => {
  return (
    <div className="component">
      <p className="lead">Pagination</p>
      <Pagination size="lg">
        <PaginationItem disabled>
          <PaginationLink previous href="#a" />
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink href="#a">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#a">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#a">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#a" />
        </PaginationItem>
      </Pagination>
      
      <Pagination>
        <PaginationItem disabled>
          <PaginationLink previous href="#a" />
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink href="#a">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#a">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#a">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#a" />
        </PaginationItem>
      </Pagination>

      <Pagination size="sm">
        <PaginationItem disabled>
          <PaginationLink previous href="#a" />
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink href="#a">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#a">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#a">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#a" />
        </PaginationItem>
      </Pagination>
    </div>
  );
};

export default Pags;
