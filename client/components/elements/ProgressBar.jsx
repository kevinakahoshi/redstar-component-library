import React, {
  useState
} from 'react';

const ProgressBar = () => {
  const [triggered, setTriggered] = useState(false);

  return (
    <>
      <div className="progress-outer">
        <div
          className="progress-inner"
          style={{
            width: triggered ? '100%' : '0%',
            transition: '2500ms linear'
          }} />
      </div>
      <div className="button-wrapper">
        <button
          className="button progress-button"
          onClick={() => setTriggered(true)}
        >
          Show Me The Progress!
        </button>
        <button
          onClick={() => setTriggered(false)}
          className="button progress-button"
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default ProgressBar;
