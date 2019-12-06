import React from 'react';
import PropTypes from 'prop-types';

const LazyTestimonial = (props) => {
  return (
    <div className={`testimonial d-flex flex-column align-items-center text-center ${props.up !== true ? "mt-md-4": " "}`}>
      <div className={`big-bubble bg-${props.bubbleColor} bubble-${props.bubbleOrientation}`}></div>
      <p className="lead font-italic">{`"${props.text}"`}</p>
      <p><b>{props.author}</b>,<br/>
      {props.role}</p>
    </div>
  );
};

LazyTestimonial.propType = {
  bubbleColor: PropTypes.string,
  bubbleOrientation: PropTypes.string,
  text: PropTypes.string,
  author: PropTypes.object,
  role: PropTypes.object,
  up: PropTypes.bool
};

LazyTestimonial.defaultProps = {
  bubbleColor: "primary",
  bubbleOrientation: "",
  text: "I will recommend you to my colleagues. Thank you for making it painless, pleasant and most of all hassle free! It really saves me time and effort.",
  author: "Tom B.",
  role: "Fullstack Developer",
  up: false
};

export default LazyTestimonial;
