import React, {
  useState,
  useEffect
} from 'react';

import LinkList from '../header/LinkList';
import NavDrawer from '../header/NavDrawer';

const Navigation = ({ linkList }) => {
  const [width, setWidth] = useState(window.innerWidth);

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
            linkList={linkList} />
        </div>
        : <NavDrawer
          linkList={linkList} />}
    </div>
  );
};

export default Navigation;
