import React from 'react';

import Logo from '../assets/images/logo.svg';

const Header = () => {
  const menuItems = [
    {
      name: 'Features',
      link: '#',
    },
    {
      name: 'Team',
      link: '#',
    },
    {
      name: 'Sign In',
      link: '#',
    },
  ];
  return (
    <div className="flex items-center w-full justify-between">
      <div className="felx items-center">
        <img alt="Fylo" className="w-20 md:w-32" src={Logo}></img>
      </div>
      <div className="flex items-center gap-8 md:gap-14">
        {menuItems.map((item, index) => (
          <p key={index} className="text-white text-base pointer hover:font-bold hover:underline cursor-pointer">
            {item.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Header;
