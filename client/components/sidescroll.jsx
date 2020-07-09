import React from 'react';
import Accordion from '../components/elements/accordion';
import TooltipWrapper from './elements/tooltip-wrapper';

const SideScroll = () => {
  return (
    <div className="side-scroll">
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <TooltipWrapper
        message="This is a new tooltip">
        <Accordion
          buttonText="Hello Please"
          innerText="Hello Hello Hello" />
      </TooltipWrapper>
    </div>
  );
};

export default SideScroll;
