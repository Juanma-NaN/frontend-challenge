import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ icon, title, text }) => {
  return (
    <div className="flex flex-col items-center">
      <img alt={title} className="h-20" src={icon} />
      <p className="text-white text-2xl font-semibold mt-8 mb-2">{title}</p>
      <p className="text-white text-center max-w-[290px] md:max-w-[360px] text-base font-body">{text}</p>
    </div>
  );
};

Item.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Item;
