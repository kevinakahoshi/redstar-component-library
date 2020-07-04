import React from 'react';

import Logo from '../components/header/logo';

const Header = ({ direction }) => {
  return (
    <header className="header">
      <div className={`logo-wrapper${direction ? `--${direction}` : ''}`}>
        <Logo />
      </div>
      <h1>Redstar Component Library</h1>
    </header>);
};

export default Header;
