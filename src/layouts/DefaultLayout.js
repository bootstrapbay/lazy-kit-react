import React from 'react';
import Footer from "./../components/Footer";

const DefaultLayout = (props) => {
  return (
    <div>
      {props.children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
