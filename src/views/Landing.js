import React from 'react';
import {
  Container
} from 'reactstrap';
import LNavbar from './../components/landing/LNavbar';
import LHeader from './../components/landing/LHeader';
import LFeatures from './../components/landing/LFeatures';
import LBlogPosts from './../components/landing/LBlogPosts';
import LTestimonials from './../components/landing/LTestimonials';
import LContact from './../components/landing/LContact';
import LCTA from './../components/landing/LCTA';
import Footer from './../components/Footer';

class Landing extends React.Component {
  render() {
    return (
      <div className="landing">
        <LNavbar />
        <LHeader />
        <LFeatures />
        <LBlogPosts />
        <LTestimonials />
        <LContact />
        <LCTA />
      </div>
    );
  };
};

export default Landing;
