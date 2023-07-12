import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, full, onClick }) => {
  return (
    <button
      className={`hover:bg-none hover:bg-lightcyan md:w-[260px] h-12 text-base font-semibold bg-gradient-to-r from-cyan to-blue rounded-full text-white pointer ${
        full ? 'w-full' : 'w-[200px]'
      }`}
      onClick={onClick && ((event) => onClick(event))}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  full: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
