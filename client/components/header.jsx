import React from 'react';

import Logo from '../components/header/Logo';
import Navigation from '../components/header/Navigation';

const Header = ({ direction, linkList }) => {
  const callToAction = {
    include: true,
    text: '949-202-7141',
    type: 'tel'
  };

  return (
    <header
      className="header">
      <Logo />
      <Navigation
        linkList={linkList}
        callToAction={callToAction} />
    </header>);
};

export default Header;
