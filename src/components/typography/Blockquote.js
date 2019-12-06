import React from "react";
import PropTypes from "prop-types";

const Blockquote = (props) => {
  return (
    <blockquote className="blockquote">
      <p className="mb-0">{props.quote}</p>
      <footer className="blockquote-footer"> {props.author} in
        <cite title="Source Title">{props.title}</cite>
      </footer>
    </blockquote>
  );
};

Blockquote.propType = {
  quote: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string
};

Blockquote.defaultProps = {
  quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go.",
  author: "Dr. Seuss",
  title: "Oh, The Places You'll Go!"
};

export default Blockquote;
