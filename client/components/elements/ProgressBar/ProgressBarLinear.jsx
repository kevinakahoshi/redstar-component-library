import React, {
  useState
} from 'react';

import ProgressBarButtonGroup from './ProgressBarButtonGroup';

const ProgressBarLinear = ({ duration }) => {
  const [triggered, setTriggered] = useState(false);

  const start = () => {
    setTriggered(true);
  };

  const reset = () => {
    setTriggered(false);
  };

  return (
    <div className="progress-wrapper">
      <div className="progress-outer">
        <div
          className="progress-inner"
          style={{
            width: triggered ? '100%' : '0%',
            transition: `width ${duration}ms linear`
          }} />
      </div>
      <ProgressBarButtonGroup
        start={start}
        reset={reset} />
    </div>
  );
};

export default ProgressBarLinear;
