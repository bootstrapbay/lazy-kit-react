import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import Feature from './Feature';

const LFeatures = () => {
  let fProps = [
    {
      color: "primary",
      icon: "tools",
      title: "Work with Bootstrap",
      text: "Bootstrap 4 is a toolkit of front-end components for websites. It provides multiple utilities and components for writing responsive websites."
    },
    {
      color: "secondary",
      icon: "puzzle-piece",
      title: "Mix & Match",
      text: "Lazy Kit comes with a variety of different components and sections. By fitting them together you can easily create your desired pages."
    },
    {
      color: "success",
      icon: "palette",
      title: "Work with Bootstrap",
      text: "Want to try different colours, spacing or typography? You can customise the Lazy Kit by modifying its SCSS files."
    }
  ]

  let features = fProps.map((feature, index) => {
    return (
      <Col xs="12" md="4" key={`feature-${index}`}>
        <Feature {...feature} />
      </Col>
    );
  });

  return (
    <div className="features">
    	<Container>
    		<Row>
          {features}
    		</Row>
    	</Container>
    </div>
  );
};

export default LFeatures;
