import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';
import Prism from "prismjs";
import PrismJsx from 'prismjs/components/prism-jsx.min';
import Tooltips  from "./../../components/Tooltips";
import Popovers  from "./../../components/Popovers";

class TooltipsPopovers extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render () {
    return (
      <div>
        <h2>Tooltips</h2>
        <p className="mb-5">Nav tabs are imported from <b>reactstrap</b> and styled with the <b>lazy kit</b>. For full documentation on how to use the Tabs component, go <a href="https://reactstrap.github.io/components/tooltips/" target="_blank">here</a>.</p>
        <p className="mb-5">Here are some examples of tooltips with different placement, triggered by the hover action.</p>
        <Tooltips />

        <pre>
          <code className="language-jsx">
          {`
import React from 'react';
import {
  Button,
  UncontrolledTooltip
} from 'reactstrap';

const Tooltips = () => {
  let tooltipProps = [
    {
      name: "Top",
      placement: "top",
      text: "I'm on top! 👇"
    },
    {
      name: "Bottom",
      placement: "bottom",
      text: "I'm at the bottom! 👆"
    },
    {
      name: "Left",
      placement: "left",
      text: "I'm on the left! 👉 "
    },
    {
      name: "Right",
      placement: "right",
      text: "I'm on the right! 👈 "
    }
  ];

  let tooltipExamples = tooltipProps.map((tooltip, index) => {
    return (
      <span key={index}>
        <Button color="success" className="mr-1" href="#" id={index}>{tooltip.name}</Button>
        <UncontrolledTooltip placement={tooltip.placement} target={index}>
          {tooltip.text}
        </UncontrolledTooltip>
      </span>
    );
  });

  return (
    <div>
      {tooltipExamples}
    </div>
  );
};

export default Tooltips;
          `}
          </code>
        </pre>

        <h2>Popovers</h2>
        <p className="mb-5">Popovers are imported from <b>reactstrap</b> and styled with the <b>lazy kit</b>. For full documentation on how to use the Popover component, go <a href="https://reactstrap.github.io/components/popovers/" target="_blank">here</a>.</p>
        <p className="mb-5">Here are some examples with different placement, triggered by the click action.</p>
        <Popovers />
        <pre>
          <code className="language-jsx">
          {`
import React from 'react';
import {
  Button,
  UncontrolledPopover,
  PopoverBody
} from 'reactstrap';

const Popovers = () => {
  let popoverProps = [
    {
      name: "Top",
      placement: "top",
      text: "Hey hey hey!"
    },
    {
      name: "Bottom",
      placement: "bottom",
      text: "How you doing?"
    },
    {
      name: "Left",
      placement: "left",
      text: "Everything is good?"
    },
    {
      name: "Right",
      placement: "right",
      text: "Alright!"
    }
  ];

  let popoversExamples = popoverProps.map((popover, index) => {
    return (
      <span key={index}>
      <Button type="button" color="secondary" id={index} className="mr-1">
        {popover.name}
      </Button>
      <UncontrolledPopover placement={popover.placement} target={index}>
        <PopoverBody>{popover.text}</PopoverBody>
      </UncontrolledPopover>
      </span>
    );
  });

  return (
    <div>
      {popoversExamples}
    </div>
  );
};

export default Popovers;
          `}
          </code>
        </pre>

      </div>
    )
  }

};

export default TooltipsPopovers;
