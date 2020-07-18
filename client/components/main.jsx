import React from 'react';

// Views
import AccordionInfo from '../views/AccordionInfo';
import IntroInfo from '../views/IntroInfo';
import Spinner from '../components/elements/Spinner';
import TooltipInfo from '../views/TooltipInfo';

const Main = ({ activeComponent }) => {
  let view = null;

  switch (activeComponent) {
    case 'Accordion':
      view = <AccordionInfo />;
      break;
    case 'Tooltip':
      view = <TooltipInfo />;
      break;
    default:
      view = <IntroInfo />;
  }

  return (
    <div className="main">
      { view }
      <Spinner />
    </div>
  );
};

export default Main;
