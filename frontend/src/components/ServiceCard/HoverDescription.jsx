import React from 'react';

const HoverDescription = ({ item }) => {
  return (
    <div key={item} className="p-1 mr-0.5 ml-0.5 font-normal text-sm">
      {item}
    </div>
  );
};

export default HoverDescription;
