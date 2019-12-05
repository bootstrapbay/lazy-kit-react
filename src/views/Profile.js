import React from 'react';
import {
  Container
} from 'reactstrap';
import PNavbar from './../components/profile/PNavbar';
import PInfo from './../components/profile/PInfo';
import PTabs from './../components/profile/PTabs';

class Profile extends React.Component {
  render() {
    return (
      <div className="profile">
        <PNavbar />
        <Container>
          <PInfo />
          <PTabs />
        </Container>
      </div>
    );
  };
};

export default Profile;
