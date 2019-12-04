import React from 'react';
import Prism from 'prismjs';
import PrismJsx from 'prismjs/components/prism-jsx.min';
import Headings  from './../../components/typography/Headings';
import Paragraphs  from './../../components/typography/Paragraphs';
import Blockquote  from './../../components/typography/Blockquote';

class Typography extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render () {
    return (
      <div>
        <h2>Typography</h2>
        <p>
          Bootstrap 4 makes use of responsive typography. To see all the elements that you can use in your typography, check out our <a href="https://bootstrapbay.com/blog/day-4-bootstrap-4-typography-tutorial-and-examples/" target="_blank">Bootstrap 4 typography tutorial</a>.
        </p>

        <p>
          Lazy Kit imports and used the Raleway font. This a free Google Font that you can download <a href="https://fonts.google.com/specimen/Raleway" target="_blank">here</a>. It is automatically included inside the source files for the kit, so you do not have to worry about importing it yourself.
        </p>

        <h4>Headings</h4>
        <p>Here is how the headings look.</p>
        <Headings />
        <pre>
          <code className="language-jsx">
          {`
import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col
 } from 'reactstrap';

const Headings = (props) => {
  const hs = [];
  for (let i = 1; i <= 6; i++) {
    let CustomH = \`h\${i}\`;
    let h = (
        <Row className="py-3 align-items-center" key={\`heading-\${i}\`}>
          <Col xs="12" sm="2">
            <p className="text-primary">{\`Heading \${i}\`}</p>
          </Col>
          <Col xs="12" sm="10">
            <CustomH className="mt-0">{props.message}</CustomH>
          </Col>
        </Row>
      );
    hs.push(h);
  }
  return (
    <div className="headings">
      {hs}
    </div>
  );
};

Headings.propType = {
  message: PropTypes.string
};

Headings.defaultProps = {
  message: "I Was Told There'd Be Cake"
};

export default Headings;
          `}
          </code>
        </pre>

        <h4 className="mt-5">Paragraphs</h4>
        <p>You can choose between the usual paragraph available with the <code>{"<p>"}</code> tag or you can make it more visible with the <code>.lead</code> className. And you can choose between multiple colors.</p>
        <Paragraphs />
        <pre>
          <code className="language-jsx">
           {`
import React from 'react';
import PropTypes from 'prop-types';
import {
 Row,
 Col
} from 'reactstrap';

const Paragraphs = (props) => {
 let options = ["muted", "primary", "secondary", "success", "info", "warning", "danger"];
 let ps = [];
 for (let i = 0; i < options.length; i++) {
   let p = (
     <Row className="py-3 align-items-center" key={\`paragraph-\${i}\`}>
       <Col xs="12" sm="2">
         <p className="text-primary">Text {options[i]}</p>
       </Col>
       <Col xs="12" sm="10">
         <p className={\`text-\${options[i]}\`}>{props.message}</p>
       </Col>
     </Row>
   );
   ps.push(p);
 }

 return (
   <div className="paragraphs">

     <Row className="py-3 align-items-center">
       <Col xs="12" sm="2">
         <p className="text-primary">Paragraph</p>
       </Col>
       <Col xs="12" sm="10">
         <p>{props.quote}</p>
       </Col>
     </Row>

     <Row className="py-3 align-items-center">
       <Col xs="12" sm="2">
         <p className="text-primary">Lead</p>
       </Col>
       <Col xs="12" sm="10">
         <p className="lead">{props.quote}</p>
       </Col>
     </Row>
     {ps}
   </div>
 );
};

Paragraphs.propType = {
 message: PropTypes.string
};

Paragraphs.defaultProps = {
 message: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
};

export default Paragraphs;
            `}
          </code>
        </pre>

        <h4 className="mt-5">Quotes</h4>
        <p>For quoting blocks of content from another source within your document you can use the Blockquote component. Here is an example.</p>
        <Blockquote />
        <pre>
          <code className="language-jsx">
            {`
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
            `}
          </code>
       </pre>
      </div>
    )
  }

};

export default Typography;
