import React, {
  useState
} from 'react';

// The TooltipWrapper component is mean to be able to add a tooltip to any
// element by wrapping it with the tooltip.  If you are looking for a simple
// tooltip that you can simply put on the page as a small icon, look for Tooltip
const TooltipWrapper = ({ message, children, orientation }) => {
  const [open, setOpen] = useState(false);

  if (typeof orientation !== 'string') {
    orientation = orientation.toString();
  }

  orientation = orientation.toLowerCase();

  if (!orientation || (orientation !== 'left' && orientation !== 'center' && orientation !== 'right')) {
    orientation = 'center';
  }

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}>
      <div className="ttw-message-outer">
        <div
          className={`ttw-message-wrapper ${open ? '' : 'd-none'}
            ttw-orientation--${orientation}`}>
          <p
            className="m-0">
            <span
              className="text-sm">
              { message }
            </span>
          </p>
        </div>
      </div>
      <div
        className="ttw-child-wrapper">
        { children }
      </div>
    </div>
  );
};

export default TooltipWrapper;
