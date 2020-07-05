import React from 'react';
import Accordion from '../components/elements/accordion';

const SideScroll = () => {
  return (
    <div className="side-scroll">
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <Accordion
        buttonText="Hello Please"
        innerText="Hello Hello Hello" />
    </div>
  );
};

export default SideScroll;
