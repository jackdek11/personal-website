import { React } from 'react';
import HoverLink from './HoverLink';
import HoverDescription from './HoverDescription';

const HoverComponent = ({ object }) => {
  const formattedItems = [];

  object.forEach((item, index) => {
    if (typeof item === 'string') {
      formattedItems.push(<HoverDescription item={item} />);
    } else if (typeof item === 'object') {
      item.forEach((subitem, subindex) => {
        formattedItems.push(<HoverLink subitem={subitem} />);
      });
    }
    // Add more conditions for other types if needed
  });

  return <div className="hover-text">{formattedItems}</div>;
};

export default HoverComponent;
