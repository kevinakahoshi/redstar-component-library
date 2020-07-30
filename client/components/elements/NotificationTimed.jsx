import React from 'react';

const NotificationPersistent = ({ maxLength, notificationText, setShow, show }) => {
  if (notificationText.length > maxLength && maxLength > 0 && typeof maxLength === 'number') {
    notificationText = notificationText.slice(0, maxLength - 1);
  }

  if (!notificationText || typeof notificationText !== 'string') return null;

  return (
    <div
      className={`notification ${show ? 'hide' : 'show'}`}>
      <div className="notification-text-wrapper">
        <p>
          { notificationText }
        </p>
      </div>
      <div className="notification-button-wrapper">
        <button
          className="close-notification"
          onClick={() => setShow(true)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default NotificationPersistent;
