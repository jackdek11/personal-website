import React from 'react';

const HoverLink = ({ subitem }) => {
  return (
    <a
      href={subitem.link}
      key={subitem.title}
      target="_blank"
      rel="noreferrer"
      className="p-1 mr-0.5 ml-0.5 font-light text-xs rounded-md"
    >
      {subitem.title}
    </a>
  );
};

export default HoverLink;
