import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ text, image, title, name }) => {
  return (
    <div className="flex flex-col bg-darkblue3 p-6 gap-6">
      <p className="text-xsm md:text-base text-white max-w-[250px] md:max-w-[300px] font-body">{text}</p>
      <div className="flex items-center gap-2">
        <img alt="Productive" className="block w-10 h-10 rounded-full" src={image} />
        <div className="flex flex-col justify-center">
          <p className="text-xsm font-body text-white md:max-w-[290px] md:max-w-[500px] font-semibold">{name}</p>
          <p className="text-xxsm text-white md:max-w-[300px] break-words">{title}</p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Card;
