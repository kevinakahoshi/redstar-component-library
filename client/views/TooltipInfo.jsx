import React from 'react';

import Tooltip from '../components/elements/Tooltip';
import TooltipWrapper from '../components/elements/TooltipWrapper';

const TooltipInfo = () => {
  return (
    <>
      <Tooltip
        message="Here is that new Tooltip Wrapper you were hearing about!" />
      <TooltipWrapper
        message="Here is that new Tooltip Wrapper you were hearing about!"
        orientation="left">
        <p>This element is wrapped in the TooltipWrapper component</p>
      </TooltipWrapper>
    </>
  );
};

export default TooltipInfo;
