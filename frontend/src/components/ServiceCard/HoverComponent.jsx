import { React } from 'react';

const HoverComponent = ({ object }) => {
  const formattedItems = [];

  object.forEach((item, index) => {
    if (typeof item === 'string') {
      formattedItems.push(
        <div key={index}>
          <p>{item}</p>
          <br />
        </div>,
      );
    } else if (typeof item === 'object') {
      item.forEach((subitem, subindex) => {
        formattedItems.push(
          <a
            href={subitem.link}
            key={subitem.title}
            target="_blank"
            rel="noreferrer"
          >
            {subitem.title}
          </a>,
        );
      });
    }
    // Add more conditions for other types if needed
  });

  return <div className="hover-text">{formattedItems}</div>;
};

export default HoverComponent;
