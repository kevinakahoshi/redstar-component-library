import React, {
  useState
} from 'react';

import Notification from '../components/elements/Notification';

const NotificationInfo = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="notification-type-wrappers">
      <button
        className="button"
        onClick={() => setShow(!show)}>
        {show ? 'Show' : 'Hide'} Notification
      </button>
      <Notification
        maxLength={40}
        notificationText="This is a new persistent notification!"
        setShow={setShow}
        show={show} />
    </div>
  );
};

export default NotificationInfo;
