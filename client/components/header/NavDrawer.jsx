import React, {
  useState
} from 'react';

import CallToAction from '../header/CallToAction';
import CloseButton from '../header/CloseButton';
import Hamburger from '../header/Hamburger';
import LinkList from '../header/LinkList';

const NavDrawer = ({ linkList, callToAction }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div
      className="nav-drawer">
      <Hamburger
        setShowDrawer={setShowDrawer} />
      <div
        className={`drawer-wrapper drawer-wrapper--${showDrawer ? 'open' : 'closed'}`}
      >
        <div
          className={`drawer drawer--${showDrawer ? 'show' : 'hide'}`}>
          <CloseButton
            setShowDrawer={setShowDrawer} />
          <div className="link-list-wrapper">
            <LinkList
              linkList={linkList} />
          </div>
          { callToAction.include
            ? <CallToAction
              callToActionText={callToAction.text}
              type={callToAction.type} />
            : '' }
        </div>
      </div>
    </div>
  );
};

export default NavDrawer;
