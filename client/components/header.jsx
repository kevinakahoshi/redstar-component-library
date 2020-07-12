import React from 'react';

import Logo from '../components/header/logo';
import Navigation from '../components/header/navigation';

const Header = ({ direction, linkList }) => {
  return (
    <header
      className="header">
      <Logo />
      <Navigation
        linkList={linkList} />
    </header>);
};

export default Header;
