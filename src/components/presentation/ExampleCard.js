import React from 'react';
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardFooter
} from "reactstrap";

const ExampleCard = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <Card className="text-center mt-5">
        <CardHeader className="p-0">
          <img className="card-img" src={require(`./../../assets/img/${props.image}`)} alt="dog" />
        </CardHeader>
        <CardFooter className="bg-primary p-4">
          <h4 className="text-white">{props.name}</h4>
        </CardFooter>
      </Card>
    </a>
  );
};

ExampleCard.propType = {
  link: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string
};

ExampleCard.defaultProps = {
  link: "landing.html",
  image: "landing.png",
  name: "Landing Page"
};


export default ExampleCard;
