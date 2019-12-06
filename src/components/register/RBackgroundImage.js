import React from 'react';
import PropTypes from 'prop-types';


class RBackgroundImage extends React.Component {
  render() {
    let bImage = require(`./../../assets/img/${this.props.image}`);
    let backgroundImageStyles = {
      backgroundImage: `url(${bImage})`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      position: 'relative',
      width: '100%',
      zIndex: 1
    };
    return (
      <div className="full-picture flex-grow-1" style={backgroundImageStyles}></div>
    );
  };
};

RBackgroundImage.propType = {
  image: PropTypes.string
};

RBackgroundImage.defaultProps = {
  image: 'dog-9.jpg'
};

export default RBackgroundImage;
