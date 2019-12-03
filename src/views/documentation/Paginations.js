import React from 'react';
import Prism from 'prismjs';
import PrismJsx from 'prismjs/components/prism-jsx.min';
import LazyPagination  from './../../components/indicators/Pags';

class Paginations extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render () {
    return (
      <div>
        <h2>Pagination</h2>
        <p className="mb-5">Pagination options are imported from <b>reactstrap</b> and styled with the <b>lazy kit</b>. For full documentation on how to use the Pagination component, go <a href="https://reactstrap.github.io/components/pagination/" target="_blank">here</a>.</p>
        <LazyPagination />
        <pre>
          <code className="language-jsx">
          {`
import React from 'react';
import {
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';

const Pags = (props) => {
  return (
    <div>
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
          `}
          </code>
        </pre>
      </div>
    )
  }

};

export default Paginations;
