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
        className="w-full p-[1px] rounded-[20px] bg-[#33333]"
      >
        <div
          options={{
            max: 4,
            scale: 15,
            speed: 45,
          }}
          className="bg-tertiary/40 rounded-[20px] py-5 px-12 min-h-[120px] flex justify-evenly items-center flex-col"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
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
