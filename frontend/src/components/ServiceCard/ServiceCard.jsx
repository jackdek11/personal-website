import { React, useState } from 'react';
import { motion } from 'framer-motion';
import HoverComponent from './HoverComponent';
import {
  ServiceCardVariants,
  ServiceCardVariantsBox,
} from '../../constants/variants';

const ServiceCard = ({ index, title, icon, hoverText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="xs:w-[250px] w-full">
      <motion.div
        variants={ServiceCardVariantsBox}
        animate={isHovered ? 'animateHover' : 'animateOut'}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 4,
            scale: 15,
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
            variants={ServiceCardVariants}
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
