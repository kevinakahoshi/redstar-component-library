import React, {
  useState
} from 'react';

import NotificationPersistent from '../components/elements/NotificationPersistent';
import NotificationTimed from '../components/elements/NotificationTimed';

const NotificationInfo = () => {
  const [showPersistent, setShowPersistent] = useState(true);
  const [showTimed, setShowTimed] = useState(true);

  return (
    <>
      <div className="notification-type-wrappers">
        <button
          className="button"
          onClick={() => setShowPersistent(!showPersistent)}
        >
          { showPersistent ? 'Show' : 'Hide' } Persistent Notification
        </button>
        <NotificationPersistent
          maxLength={40}
          notificationText="This is a new persistent notification!"
          setShowPersistent={setShowPersistent}
          show={showPersistent}
        />
      </div>
      <div
        className="notification-text-wrappers">
        <button
          className="button"
          onClick={() => setShowTimed(!showTimed)}>
          { showTimed ? 'Show' : 'Hide' } Timed Notification
        </button>
        <NotificationTimed
          maxLength={40}
          notificationText="This is a new timed notification!"
          setShowTimed={setShowTimed}
          show={showTimed} />
      </div>
    </>
  );
};

export default NotificationInfo;
