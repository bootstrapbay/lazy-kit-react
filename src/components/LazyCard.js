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
        <img className="card-img" src={require(`./../assets/img/${props.image}`)} alt="alt desc" />
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
