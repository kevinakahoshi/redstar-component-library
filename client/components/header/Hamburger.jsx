import React from 'react';

const Hamburger = ({ showDrawer, setShowDrawer }) => {
  return (
    <div
      className="hamburger"
      onClick={() => setShowDrawer(true)}>
      <div
        className="burger-line top" />
      <div
        className="burger-line middle" />
      <div
        className="burger-line bottom" />
    </div>
  );
};

export default Hamburger;
