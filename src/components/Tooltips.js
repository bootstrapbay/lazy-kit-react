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
      <span key={`tooltip-${index}`}>
        <Button color="success" className="mr-1" href="#" id={`tooltipE-${index}`}>{tooltip.name}</Button>
        <UncontrolledTooltip placement={tooltip.placement} target={`tooltipE-${index}`}>
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
