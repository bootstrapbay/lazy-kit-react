import React from 'react';
import Prism from 'prismjs';
import PrismJsx from 'prismjs/components/prism-jsx.min';
import LazyPagination  from './../../components/indicators/Pags';
import SimpleButtons from './../../components/buttons/SimpleButtons';
import PillButtons from './../../components/buttons/PillButtons';
import IconButtons from './../../components/buttons/IconButtons';
import SizedButtons from './../../components/buttons/SizedButtons';


class Buttons extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render () {
    return (
      <div>
        <h2>Buttons</h2>
        <p className="mb-5">Buttons are imported from <b>reactstrap</b> and styled with the <b>lazy kit</b>. For full documentation on how to use the Button component, go <a href="https://reactstrap.github.io/components/pagination/" target="_blank">here</a>.
        <h4>Simple Buttons</h4>
        Here is how the simple and outlined buttons look. You need to add the <code>outline</code> property to the Button component to get the outlined look.</p>
        <SimpleButtons />
        <pre>
          <code className="language-jsx">
          {`
import React from "react";
import { Button } from 'reactstrap';

const SimpleButtons = (props) => {
  return (
    <div>
      <Button color="primary">Primary</Button>{" "}
      <Button color="secondary">Secondary</Button>{" "}
      <Button color="success">Success</Button>{" "}
      <Button color="info">Info</Button>{" "}
      <Button color="warning">Warning</Button>{" "}
      <Button color="danger">Danger</Button>{" "}
      <Button color="light">Light</Button>{" "}
      <Button color="dark">Dark</Button>{" "}
      <br /><br />
      <Button color="primary" outline>Primary</Button>{" "}
      <Button color="secondary" outline>Secondary</Button>{" "}
      <Button color="success" outline>Success</Button>{" "}
      <Button color="info" outline>Info</Button>{" "}
      <Button color="warning" outline>Warning</Button>{" "}
      <Button color="danger" outline>Danger</Button>{" "}
      <Button color="light" outline>Light</Button>{" "}
      <Button color="dark" outline>Dark</Button>{" "}
    </div>
  );
};

export default SimpleButtons;
          `}
          </code>
        </pre>
        <h4 className="mt-5">Pill Buttons</h4>
        <p className="mb-4">If you want buttons with a rounded look, you can add the <code>btn-pill</code> className to the Button component.</p>
        <PillButtons />
        <pre>
        <code className="language-jsx">
{`
import React from "react";
import { Button } from 'reactstrap';

const PillButtons = (props) => {
  return (
    <div >
    <Button color="primary" className="btn-pill">Primary</Button>{" "}
    <Button color="secondary" className="btn-pill">Secondary</Button>{" "}
    <Button color="success" className="btn-pill">Success</Button>{" "}
    <Button color="info" className="btn-pill">Info</Button>{" "}
    <Button color="warning" className="btn-pill">Warning</Button>{" "}
    <Button color="danger" className="btn-pill">Danger</Button>{" "}
    <Button color="light" className="btn-pill">Light</Button>{" "}
    <Button color="dark" className="btn-pill">Dark</Button>{" "}
    <br /><br />
    <Button color="primary" outline className="btn-pill">Primary</Button>{" "}
    <Button color="secondary" outline className="btn-pill">Secondary</Button>{" "}
    <Button color="success" outline className="btn-pill">Success</Button>{" "}
    <Button color="info" outline className="btn-pill">Info</Button>{" "}
    <Button color="warning" outline className="btn-pill">Warning</Button>{" "}
    <Button color="danger" outline className="btn-pill">Danger</Button>{" "}
    <Button color="light" outline className="btn-pill">Light</Button>{" "}
    <Button color="dark" outline className="btn-pill">Dark</Button>{" "}
    </div>
  );
};

export default PillButtons;
  `}
        </code>
        </pre>

        <h4 className="mt-5">Buttons with Icons</h4>
        <p className="mb-4">You can also include icons from FontAwesome inside the buttons. One option is to  add them besides a text. Another options is to have the button feature the icon exclusively. In this case, you can add the <code>btn-icon</code> className to the button to get a round look.</p>
        <IconButtons />
        <pre>
          <code className="language-jsx">
{`
import React from "react";
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconButtons = (props) => {
  return (
    <div>
      <Button color="success">
        <FontAwesomeIcon icon="heart" /> {" "}
        Simple
      </Button> {" "}
      <Button color="success" outline>
        <FontAwesomeIcon icon="heart" /> {" "}
        Outline
      </Button> {" "}
      <Button color="success" className="btn-pill">
        <FontAwesomeIcon icon="heart" /> {" "}
        Pill
      </Button> {" "}
      <Button color="success" outline className="btn-pill">
        <FontAwesomeIcon icon="heart" /> {" "}
        Outline Pill
      </Button> {" "}
      <Button color="success" className="btn-icon">
        <FontAwesomeIcon icon="heart" /> {" "}
      </Button> {" "}
      <Button color="success" outline className="btn-icon">
        <FontAwesomeIcon icon="heart" /> {" "}
      </Button> {" "}
    </div>
  );
};

export default IconButtons;

`}
          </code>
        </pre>

        <h4 className="mt-5">Button Sizes</h4>
        <p className="mb-4">Besides the default size, you can also specify a large size with the <code>size="lg"</code> prop or a small size with the <code>size="sm"</code> prop.</p>
        <SizedButtons />
        <pre>
          <code className="language-jsx">
{`
import React from "react";
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SizedButtons = (props) => {
  return (
    <div>
      <Button color="danger" size="lg">
        Large Button
      </Button> {" "}
      <Button color="danger" outline size="lg" className="btn-icon">
        <FontAwesomeIcon icon="heart" /> {" "}
      </Button> {" "}
      <Button color="danger">
        Default Button
      </Button> {" "}
      <Button color="danger" outline className="btn-icon">
        <FontAwesomeIcon icon="heart" /> {" "}
      </Button> {" "}
      <Button color="danger" size="sm">
        Small Button
      </Button> {" "}
      <Button color="danger" outline size="sm" className="btn-icon">
        <FontAwesomeIcon icon="heart" /> {" "}
      </Button> {" "}
    </div>
  );
};

export default SizedButtons;
`}
          </code>
        </pre>

      </div>
    )
  }

};

export default Buttons;
