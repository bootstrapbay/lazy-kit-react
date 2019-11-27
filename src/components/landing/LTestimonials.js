import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import LazyTestimonial from "./../LazyTestimonial";

const LTestimonials = (props) => {
  let testProps = [
    {
      bubbleColor: "info",
      bubbleOrientation: "top-left",
      text: "Lazy kit impressed me on multiple levels. It's the perfect solution for our business. Thank you so much for your help. Best. Product. Ever!",
      author: "Cathee V.",
      role: "Web Developer",
      up: true
    },
    {
      bubbleColor: "primary",
      bubbleOrientation: "bottom-left",
      text: "I will recommend you to my colleagues. Thank you for making it painless, pleasant and most of all hassle free! It really saves me time and effort.",
      author: "Tom B.",
      role: "Fullstack Developer",
      up: false
    },
    {
      bubbleColor: "warning",
      bubbleOrientation: "top-right",
      text: "Needless to say we are extremely satisfied with the results. Lazy kit did exactly what you said it does. Lazy kit has really helped our business.",
      author: "Billie A.",
      role: "Web Designer",
      up: true
    },
    {
      bubbleColor: "success",
      bubbleOrientation: "bottom-right",
      text: "We've used Lazy kit for the last five projects. I wish I would have thought of it first. I am completely blown away. Definitely worth giving it a try.",
      author: "Jack F.",
      role: "Front-End Developer",
      up: false
    }
  ];

  let testimonials = testProps.map((p, index) => {
    return (
      <Col xs="12" md="3" key={`key-index-${index}`}>
        <LazyTestimonial {...p} />
      </Col>
    );
  })
  return (
    <div className="testimonials bg-light">
    	<div className="text-center mb-5">
    		<h2>Testimonials</h2>
    		<p className="lead">Here is what some of our customers are saying.</p>
    	</div>
      <Container>
        <Row>
          {testimonials}
        </Row>
      </Container>
   </div>
  );
};

export default LTestimonials;
