import React, { FC } from 'react';

interface ItemProps {
  icon: string;
  title: string;
  text: string;
}

const Item: FC<ItemProps> = ({ icon, title, text }) => {
  return (
    <div className="flex flex-col items-center">
      <img alt={title} className="h-20" src={icon} />
      <p className="text-white text-2xl font-semibold mt-8 mb-2">{title}</p>
      <p className="text-white text-center max-w-[290px] md:max-w-[360px] text-base font-body">{text}</p>
    </div>
  );
};

export default Item;
