import { React, useState } from 'react';
import { motion } from 'framer-motion';
import HoverComponent from './HoverComponent';

const ServiceCard = ({ index, title, icon, hoverText }) => {
  const [isHovered, setIsHovered] = useState(false);

  const variantsBox = {
    animateHover: {
      transition: {
        duration: 0.1,
        ease: 'easeOut',
      },
      opacity: 1,
      y: 0,
      scale: 1.1, // Add scale for enlargement
    },
    // ...
  };

  const variants = {
    animateHover: {
      transition: {
        duration: 0.2, // Adjust duration as needed
        ease: 'easeOut',
      },
      opacity: 1,
      y: 0,
    },
    animateOut: {
      transition: {
        duration: 0.5, // Adjust duration as needed
        ease: 'easeIn',
      },
      opacity: 0.75,
      y: 0, // Adjust the starting position for the outgoing text
    },
  };

  return (
    <div className="xs:w-[250px] w-full">
      <motion.div
        variants={variantsBox}
        animate={isHovered ? 'animateHover' : 'animateOut'}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 4,
            scale: 1,
            speed: 45,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />
          <motion.h3
            className="text-white text-[20px] font-bold text-center"
            variants={variants}
            animate={isHovered ? 'animateHover' : 'animateOut'}
          >
            {isHovered ? <HoverComponent object={hoverText} /> : title}
          </motion.h3>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceCard;
