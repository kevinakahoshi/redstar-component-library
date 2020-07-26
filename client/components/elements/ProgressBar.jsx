import React, {
  useState
} from 'react';

const ProgressBar = () => {
  const [width, setWidth] = useState(0);

  const increment = () => {
    if (width < 100) {
      setWidth(width + 10);
    }
  };

  const reset = () => {
    setWidth(0);
  };

  const progressBarWidth = {
    'width': `${width}%`
  };

  return (
    <>
      <div className="progress-outer">
        <div className="progress-inner" style={progressBarWidth} />
      </div>
      <button
        className="button progress-button"
        onClick={increment}>
          Show Me The Progress!
      </button>
      <button
        onClick={reset}
        className="button progress-button">
          Reset
      </button>
    </>
  );
};

export default ProgressBar;
