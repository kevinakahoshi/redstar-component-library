import React, {
  useState
} from 'react';

const Accordion = ({ buttonText, innerText }) => {
  const [open, setOpen] = useState(false);
  let display = open ? null : 'd-none';

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
        className={`inner-text-wrapper ${display}`}>
        <p
          className="inner-text m-0">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default Accordion;
