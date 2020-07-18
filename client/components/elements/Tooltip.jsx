import React, {
  useState
} from 'react';

const Tooltip = ({ message }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="tooltip tooltip-wrapper"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}>
      <div className="tt-message-outer">
        <div
          className={`ttw-message-wrapper ${open ? '' : 'd-none'}
            ttw-orientation--${''}`}>
          <p
            className="m-0">
            <span
              className="text-sm">
              {message}
            </span>
          </p>
        </div>
      </div>
      <div
        className="tt-icon">
        i
      </div>
    </div>
  );
};

export default Tooltip;
