import React from 'react';
import {
  Container
} from 'reactstrap';
import PNavbar from './../components/profile/PNavbar';
import PInfo from './../components/profile/PInfo';
import PTabs from './../components/profile/PTabs';
import Footer from './../components/Footer';

class Profile extends React.Component {
  render() {
    return (
      <div className="profile">
        <PNavbar />
        <Container>
          <PInfo />
          <PTabs />
        </Container>
        <Footer />
      </div>
    );
  };
};

export default Profile;
