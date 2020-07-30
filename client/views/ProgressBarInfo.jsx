import React from 'react';

import ProgressBarLinear from '../components/elements/ProgressBar/ProgressBarLinear';
import ProgressBarRandom from '../components/elements/ProgressBar/ProgressBarRandom';

const ProgressBarInfo = () => {
  return (
    <>
      <ProgressBarLinear
        duration={1000} />
      <ProgressBarRandom
        duration={250}
        intervalSpeed={1000} />
    </>
  );
};

export default ProgressBarInfo;
