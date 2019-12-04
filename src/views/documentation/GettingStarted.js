import React from 'react';
import { Button } from 'reactstrap';
import Prism from 'prismjs';
import PrismJsx from 'prismjs/components/prism-jsx.min';
import { Link } from 'react-router-dom';

class GettingStarted extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render () {
    return (
      <div>
      <h2>Getting Started</h2>
      <p>This guide will guide through the process of starting to use the Lazy Kit React.
        We have tried to make as user-friendly and easy-to-use as possible. We hope you will have a nice time
      using it and it will be of help to you in your projects.
      </p>
      <h5 className="mt-5">Install dependencies</h5>
      <pre>
        <code className="language-jsx">
npm install
        </code>
      </pre>
      <p>Run this command to install all dependies for the project.</p>

      <h5 className="mt-5">Start the Project</h5>
      <pre>
        <code className="language-jsx">
npm start
        </code>
      </pre>
      <p>This command will start your project in development mode. And that is it, you can start building your project.</p>

      <h5 className="mt-5">Other commands</h5>
      <pre>
        <code className="language-jsx">
npm run build
        </code>
      </pre>
      <p>This command builds the app for production to the build folder.</p>

      <pre>
        <code className="language-jsx">
npm run eject
        </code>
      </pre>
      <p>This command will remove the single build dependency from your project.</p>

      <h5 className="mt-5">Now what?</h5>
      <p>Once you have the project up and running, you can inspect more closely the contents. Here is a guide to help you:</p>
      <Link to="/documentation/contents"><Button color="primary">Go to Contents</Button></Link>
      </div>

    );
  }
};

export default GettingStarted;
