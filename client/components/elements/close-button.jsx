import React from 'react';

const CloseButton = ({ setShowDrawer }) => {
  return (
    <button
      className="close-button"
      onClick={() => setShowDrawer(false)} />
  );
};

export default CloseButton;
