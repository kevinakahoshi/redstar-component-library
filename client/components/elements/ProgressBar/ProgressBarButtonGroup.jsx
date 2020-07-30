import React from 'react';

const ProgressBarButtonGroup = ({ start, reset }) => {
  return (
    <div className="button-wrapper">
      <button
        className="button progress-button"
        onClick={start}>
        Show Me Random Progress!
      </button>
      <button
        onClick={reset}
        className="button progress-button">
        Reset
      </button>
    </div>
  );
};

export default ProgressBarButtonGroup;
