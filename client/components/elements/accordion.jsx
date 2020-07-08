import React, {
  useState
} from 'react';

const Accordion = ({ buttonText, innerText }) => {
  const [open, setOpen] = useState(false);
  let display = open ? '' : 'd-none';

  return (
    <div
      className="accordion-button"
      onClick={() => setOpen(!open)}>
      <div
        className={`button-text-wrapper ${open ? 'wrapper--open' : 'wrapper--closed'}`}>
        <p
          className="button-text m-0">
          { buttonText }
        </p>
      </div>
      <div
        className={`divider ${display}`} />
      <div
        className={`inner-text-wrapper ${open ? 'text-wrapper--open' : 'text-wrapper--closed'}`}>
        <p
          className="inner-text m-0">
          { innerText }
        </p>
      </div>
    </div>
  );
};

export default Accordion;
