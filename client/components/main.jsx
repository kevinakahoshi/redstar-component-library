import React from 'react';

// Views
import AccordionInfo from '../views/AccordionInfo';
import ButtonSpinnerInfo from '../views/ButtonSpinnerInfo';
import IntroInfo from '../views/IntroInfo';
import NotificationInfo from '../views/NotificationInfo';
import ProgressBarInfo from '../views/ProgressBarInfo';
import SpinnerInfo from '../views/SpinnerInfo';
import TooltipInfo from '../views/TooltipInfo';

const Main = ({ activeComponent }) => {
  let view = '';

  switch (activeComponent) {
    case 'Accordion':
      view = <AccordionInfo />;
      break;
    case 'ButtonSpinner':
      view = <ButtonSpinnerInfo />;
      break;
    case 'Notification':
      view = <NotificationInfo />;
      break;
    case 'ProgressBar':
      view = <ProgressBarInfo />;
      break;
    case 'Spinner':
      view = <SpinnerInfo />;
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
    </div>
  );
};

export default Main;
