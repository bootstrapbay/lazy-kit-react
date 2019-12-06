import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';
import Prism from "prismjs";
import LazyCard  from "./../../components/LazyCard";
require('prismjs/components/prism-jsx.min');

class Cards extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render () {
    return (
      <div>
        <h2>Cards</h2>
        <p className="mb-5">Cards are imported from <b>reactstrap</b> and styled with the <b>lazy kit</b>. For full documentation on how to use the Card component, go <a href="https://reactstrap.github.io/components/card/" target="_blank" rel="noopener noreferrer">here</a>.</p>
        <p>We have added a default hover effect for the Card. If you don't want to use it, you can add the className <code>no-hover</code>. Here is how a Lazy Card looks.</p>
        <Row>
          <Col xs="12" md="6">
            <LazyCard />
          </Col>
        </Row>

        <pre>
          <code className="language-jsx">
          {`
import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Badge
} from 'reactstrap';

const LazyCard = (props) => {
  return (
    <Card>
      <CardHeader>
        <img className="card-img" src={props.image} alt="alt desc" />
      </CardHeader>
      <CardBody>
        <Badge className="mb-2" color={props.tag.color}>{props.tag.name}</Badge>
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">{props.description}</p>
      </CardBody>
      <CardFooter>
        <Button href={props.button.link} color={props.button.color} outline={props.button.outline}>Read More</Button>
      </CardFooter>
    </Card>
  );
};

LazyCard.propType = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  tag: PropTypes.object,
  button: PropTypes.object
};

LazyCard.defaultProps = {
  image: "dog-1.jpg",
  title: "How to look after and care for a dog",
  description: "Owning a dog is great fun and immensely rewarding. But, dogs have complex needs and each dog is unique.",
  tag: {color: "success", name: "Pets"},
  button: {link: "/", ouline: false, color: "primary"}
};

export default LazyCard;
          `}
          </code>
        </pre>
      </div>
    )
  }

};

export default Cards;
