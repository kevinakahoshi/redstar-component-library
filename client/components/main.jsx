import React from 'react';
import Accordion from '../components/elements/accordion';
import TooltipWrapper from './elements/tooltip-wrapper';

const Main = () => {
  return (
    <div className="main">
      <Accordion
        buttonText="Hello Please"
        innerText="Hello Hello Hello" />
      <TooltipWrapper
        message="Here is that new Tooltip Wrapper you were hearing about!"
        orientation="left">
        <p>This element is wrapped in the TooltipWrapper component</p>
      </TooltipWrapper>
    </div>
  );
};

export default Main;
