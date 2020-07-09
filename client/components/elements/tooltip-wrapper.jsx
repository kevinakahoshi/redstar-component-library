import React, {
  useState
} from 'react';

// The TooltipWrapper component is mean to be able to add a tooltip to any
// element by wrapping it with the tooltip.  If you are looking for a simple
// tooltip that you can simply put on the page as a small icon, look for Tooltip
const TooltipWrapper = ({ message, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="tooltip-wrapper">
      <div className="ttw-message-outer">
        <div
          className={`ttw-message-wrapper ${open ? '' : 'd-none'}`}>
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
        className="ttw-child-wrapper"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}>
        { children }
      </div>
    </div>
  );
};

export default TooltipWrapper;
