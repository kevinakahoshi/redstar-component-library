import React from 'react';

const CallToAction = ({ callToActionText, type }) => {
  let href = callToActionText;

  if (type === 'tel') {
    href = `tel:+1${callToActionText.replace(/[^0-9]/g, '')}`;
  }

  return (
    <a
      href={href}
      className="call-to-action">
      {callToActionText}
    </a>
  );
};

export default CallToAction;
