import React, {
  useEffect,
  useState
} from 'react';

import ProgressBarButtonGroup from './ProgressBarButtonGroup';

const ProgressBarRandom = ({ duration, intervalSpeed }) => {
  const [barWidth, setBarWidth] = useState(0);
  const [start, setStart] = useState(false);

  const begin = () => {
    setStart(true);
  };

  const incrementRandom = () => {
    if (barWidth < 100) {
      const max = (100 - barWidth) / 4;
      const newWidth = barWidth + Math.floor(Math.random() * max + 1);
      setBarWidth(newWidth);
    }
  };

  const reset = () => {
    setBarWidth(0);
    setStart(false);
  };

  useEffect(() => {
    if (!start) {
      return;
    }

    if (!barWidth) {
      incrementRandom();
    }

    const startRandom = setInterval(
      incrementRandom,
      Math.floor(Math.random() * intervalSpeed)
    );

    if (barWidth === 100) {
      setStart(false);
      return clearInterval(startRandom);
    }

    return () => clearInterval(startRandom);
  }, [barWidth, start]);

  return (
    <div className="progress-wrapper">
      <div className="progress-outer">
        <div
          className="progress-inner"
          style={{
            width: barWidth + '%',
            transition: `width ${duration}ms ease-in-out`
          }}
        />
      </div>
      <ProgressBarButtonGroup start={begin} reset={reset} />
    </div>
  );
};

export default ProgressBarRandom;
