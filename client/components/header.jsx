import React from 'react';

import Logo from '../components/header/Logo';
import Navigation from '../components/header/Navigation';

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
