import React from 'react';

// Main Components
import Header from '../components/Header';
import SideScroll from '../components/Sidescroll';
import Main from '../components/Main';
import Footer from '../components/Footer';

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
