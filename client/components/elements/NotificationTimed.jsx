import React, {
// useEffect
} from 'react';

const NotificationTimed = ({
  duration,
  maxLength,
  notificationText,
  setShowTimed,
  show
}) => {
  if (
    notificationText.length > maxLength &&
    maxLength > 0 &&
    typeof maxLength === 'number'
  ) {
    notificationText = notificationText.slice(0, maxLength - 1);
  }

  if (!notificationText || typeof notificationText !== 'string') return null;

  if (!show) {
    setTimeout(() => {
      setShowTimed(true);
    }, duration);
  }

  return (
    <div className={`notification show`}>
      <div className="notification-text-wrapper">
        <p>{notificationText}</p>
      </div>
      <div className="notification-button-wrapper">
        <button
          className="close-notification"
          onClick={() => setShowTimed(true)}
        >
          Close
        </button>
      </div>
      <div className="timer-wrapper">
        <div
          className="timer-inner grow"
          style={{
            animationDuration: `${duration}ms`
          }}
        />
      </div>
    </div>
  );
};

export default NotificationTimed;
