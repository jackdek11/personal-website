import { React, useState } from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon, hoverText }) => {
  const [isHovered, setIsHovered] = useState(false);

  const variantsBox = {
    animateHover: {
      transition: {
        duration: 0.4,
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
        duration: 0.4, // Adjust duration as needed
        ease: 'easeOut',
      },
      opacity: 1,
      y: 0,
    },
    animateOut: {
      transition: {
        duration: 0.3, // Adjust duration as needed
        ease: 'easeIn',
      },
      opacity: 0.5,
      y: 3, // Adjust the starting position for the outgoing text
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
            {isHovered ? hoverText : title}
          </motion.h3>
        </div>
      </motion.div>
    </div>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a dynamic and driven professional, an experienced leader, and an
        emerging talent with a track record of building, rebuilding, refactoring
        and designing systems across multiple industries. To list a few;
        telecoms, SaaS, FinTech, cybersecurity, education and open source
        network tooling. My implemtations have served systems with thousands of
        users and managed millions of dollars.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
