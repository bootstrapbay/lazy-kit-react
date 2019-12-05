import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';
import LazyCard from "../LazyCard";

const PCards = (props) => {
  let cardProps = [
    {
      image: "dog-1.jpg",
      title: "How to look after and care for a dog",
      description: "Owning a dog is great fun and immensely rewarding. But, dogs have complex needs and each dog is unique.",
      tag: {color: "success", name: "Pets"},
      button: {link: "/", outline: false, color: "primary"}
    },
    {
      image: "dog-2.jpg",
      title: "Woof! How to find dog-friendly beaches in Spain",
      description: "Considering Spain's abundant coastline, beaches that do allow you to take your pooch to feel sand...",
      tag: {color: "warning", name: "Vacation"},
      button: {link: "/", outline: true, color: "primary"}
    },
    {
      image: "dog-3.jpg",
      title: "Getting Started With Your Puppy",
      description: "This new addition to your family will require lots of love, attention and plenty of supplies.",
      tag: {color: "secondary", name: "Hobby"},
      button: {link: "/", outline: true, color: "primary"}
    }
  ];

  let cards = cardProps.map((p, index) => {
    return (
      <Col xs="12" md="4" key={`key-index-${index}`}>
        <LazyCard {...p} />
      </Col>
    );
  })
  return (
    <div className="section">
      <Row>
        <Col xs="12" md={{size: 8, offset: 2}}>
          <div className="header">
            <h2>Cards</h2>
            <p>The original structure for the Reactstrap cards remains intact. Lazy Kit brings more focus on them with the help of shadows and hover events.</p>
          </div>
        </Col>
      </Row>
      <div className="component">
        <Row>
          {cards}
        </Row>
      </div>
    </div>

  );
};

export default PCards;
