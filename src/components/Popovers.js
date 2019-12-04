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
    <div>
      {popoversExamples}
    </div>
  );
};

export default Popovers;
