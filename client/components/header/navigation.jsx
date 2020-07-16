import React, {
  useState,
  useEffect
} from 'react';

import CallToAction from './CallToAction';
import LinkList from '../header/LinkList';
import NavDrawer from '../header/NavDrawer';

const Navigation = ({ linkList, callToAction }) => {
  const [width, setWidth] = useState(window.innerWidth);

  if (!callToAction || typeof callToAction !== 'object') {
    callToAction = {
      include: false,
      text: '',
      type: ''
    };
  }

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
  }, []);

  return (
    <div
      className="navigation">
      {width > 767
        ? <div className="desktop">
          <LinkList
            linkList={linkList}
            callToAction={callToAction} />
          {callToAction.include
            ? <CallToAction
              callToActionText={callToAction.text} />
            : '' }
        </div>
        : <NavDrawer
          linkList={linkList}
          callToAction={callToAction} />}
    </div>
  );
};

export default Navigation;
