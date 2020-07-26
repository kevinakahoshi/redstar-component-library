import React from 'react';

const SideScroll = ({ activeComponent, setActiveComponent }) => {
  const handleClick = event => {
    if (event.target.value === activeComponent) return;
    setActiveComponent(event.target.value);
  };

  return (
    <div className="side-scroll">
      <button
        className="button"
        value="Accordion"
        onClick={handleClick}>
        Accordion
      </button>
      <button
        className="button"
        value="ButtonSpinner"
        onClick={handleClick}>
        Button Spinner
      </button>
      <button
        className="button"
        value="Spinner"
        onClick={handleClick}>
        Spinner
      </button>
      <button
        className="button"
        value="Tooltip"
        onClick={handleClick}>
        Tooltip
      </button>
    </div>
  );
};

export default SideScroll;
