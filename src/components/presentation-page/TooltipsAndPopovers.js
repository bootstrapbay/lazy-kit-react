import React from 'react';
import {
  Row,
  Col,
  Button,
  UncontrolledTooltip,
  UncontrolledPopover,
  PopoverBody
} from 'reactstrap';

const TooltipsAndPopovers = () => {
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
      <span key={`tooltip-${index}`}>
        <Button color="success" className="mr-1" href="#" id={`tooltipE-${index}`}>{tooltip.name}</Button>
        <UncontrolledTooltip placement={tooltip.placement} target={`tooltipE-${index}`}>
          {tooltip.text}
        </UncontrolledTooltip>
      </span>
    );
  });

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
      <span key={`popover-${index}`}>
      <Button type="button" color="secondary" id={`popover-${index}`} className="mr-1">
        {popover.name}
      </Button>
      <UncontrolledPopover placement={popover.placement} target={`popover-${index}`}>
        <PopoverBody>{popover.text}</PopoverBody>
      </UncontrolledPopover>
      </span>
    );
  });

  return (
    <div className="section">
      <Row>
        <Col xs="12" md={{size: 8, offset: 2}}>
          <div className="header">
            <h2 id="modals">Tooltips and Popovers</h2>
            <p>Both tooltips and popovers offer an easy way to display more information on hover or click. You must enable them inside your Javascript in order to use them.</p>
          </div>
           <div className="component">
            <Row>
              <Col xs="12" md="6">
                <p className="lead">Tooltips</p>
                {tooltipExamples}
              </Col>
              <Col xs="12" md="6">
                <p className="lead">Popovers</p>
                {popoversExamples}
              </Col>
            </Row>
           </div>
        </Col>
      </Row>
    </div>
  );
};

export default TooltipsAndPopovers;
