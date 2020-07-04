import React from 'react';

// Main Components
import Header from '../components/header';
import SideScroll from '../components/sidescroll';
import Main from '../components/main';
import Footer from '../components/footer';

const App = () => {
  return (
    <div className="section-wrapper">
      <Header
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
