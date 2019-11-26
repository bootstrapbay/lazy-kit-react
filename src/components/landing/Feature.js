import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Feature extends React.Component {
  render () {
    return (
      <div className="feature">
        <div className={`big-icon text-${this.props.color}`}>
          <FontAwesomeIcon icon={this.props.icon} />
        </div>
        <h5 className={`text-${this.props.color}`}>{this.props.title}</h5>
        <p className="lead">{this.props.text}</p>
      </div>
    );
  }
};

Feature.propType = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
};

Feature.defaultProps = {
  color: "primary",
  icon: "tools",
  title: "Work with Bootstrap",
  text: "Bootstrap 4 is a toolkit of front-end components for websites. It provides multiple utilities and components for writing responsive websites."
};

export default Feature;
