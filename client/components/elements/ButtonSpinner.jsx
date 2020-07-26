import React, {
  useState
} from 'react';

const ButtonSpinner = ({ text }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      className="button button-spinner"
      onClick={() => setClicked(!clicked)}
    >
      <span
        className={`button-spinner-text visibility--${
          clicked ? 'hide' : 'show'
        }`}
      >
        {text}
      </span>
      <div className={`mini-spinner-wrapper visibility--${
        clicked ? 'show' : 'hide'
      }`}>
        <div className="mini-spinner" />
      </div>
    </button>
  );
};

export default ButtonSpinner;
