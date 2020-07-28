import React, {
  useState
} from 'react';

const ProgressBarLinear = ({ duration }) => {
  const [triggered, setTriggered] = useState(false);

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
      <div className="button-wrapper">
        <button
          className="button progress-button"
          onClick={() => setTriggered(true)}
        >
          Show Me Linear Progress!
        </button>
        <button
          onClick={() => setTriggered(false)}
          className="button progress-button"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ProgressBarLinear;
