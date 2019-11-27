import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import LazyCard from "./../LazyCard";

const LBlogPosts = (props) => {
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
    <div className="blog-posts bg-light">
    	<div className="text-center">
    		<h2>Latest Blog Posts</h2>
    		<p className="lead">We are constantly releasing new features. Stay up to date with us.</p>
    	</div>
      <Container>
        <Row>
          {cards}
        </Row>
      </Container>
   </div>
  );
};

export default LBlogPosts;
