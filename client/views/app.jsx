import React from 'react';

// Main Components
import Header from '../components/header';
import SideScroll from '../components/sidescroll';
import Main from '../components/main';
import Footer from '../components/footer';

const App = () => {
  const linkList = [
    {
      href: '#',
      text: 'Home'
    },
    {
      href: '#',
      text: 'About'
    },
    {
      href: '#',
      text: 'Services'
    },
    {
      href: '#',
      text: 'Contact'
    }
  ];

  return (
    <div className="section-wrapper">
      <Header
        linkList={linkList}
      />
      <div className="content-container">
        <SideScroll />
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default App;
