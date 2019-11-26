import React from 'react';
import {
  Container
} from 'reactstrap';
import LNavbar from './../components/landing/LNavbar';
import LHeader from './../components/landing/LHeader';
import LFeatures from './../components/landing/LFeatures';
import Footer from './../components/Footer';

class Landing extends React.Component {
  render() {
    return (
      <div className="landing">
        <LNavbar />
        <LHeader />
        <LFeatures />
        <Footer />
      </div>
    );
  };
};

export default Landing;
