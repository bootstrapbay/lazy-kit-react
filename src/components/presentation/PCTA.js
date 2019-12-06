import React from 'react';
import {
  Button
} from "reactstrap";
import HeartEyesEmoji from "./../../assets/img/gifs/hearteyes.gif";

const PCTA = (props) => {
  return (
    <div className="download bg-primary text-center text-white">
      <div className="emoji mb-3">
      	<img src={HeartEyesEmoji} width="50" alt="HeartEmoji"/>
      </div>
      <h1 className="text-white">Try Lazy Kit for free</h1>
      <p className="lead">
        Do you like how this kit looks? See what you can built with it! <br /> We would love to see your work.
      </p>
      <Button href="https://bootstrapbay.com/theme/lazy-free-react-ui-kit-BD90DEB" color="white" size="lg" className="mt-4">
        Download
      </Button>
    </div>
  );
};

export default PCTA;
