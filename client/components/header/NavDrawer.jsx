import React, {
  useState
} from 'react';

import CloseButton from '../elements/CloseButton';
import Hamburger from '../elements/Hamburger';
import LinkList from '../header/LinkList';

const NavDrawer = ({ linkList }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div
      className="nav-drawer">
      <Hamburger
        setShowDrawer={setShowDrawer} />
      <div
        className={`drawer-wrapper drawer-wrapper--${showDrawer ? 'open' : 'closed'}`}
        // onClick={() => setShowDrawer(false)}
      >
        <div
          className={`drawer drawer--${showDrawer ? 'show' : 'hide'}`}>
          <CloseButton
            setShowDrawer={setShowDrawer} />
          <LinkList
            linkList={linkList} />
        </div>
      </div>
    </div>
  );
};

export default NavDrawer;
