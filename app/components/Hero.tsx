'use client';
import type { Variants, Transition } from 'framer-motion';
import { motion } from 'framer-motion';

import About from './About';
import PrimaryHeading from './PrimaryHeading';
import SecondaryHeading from './SecondaryHeading';

const variants: Variants = {
  hide: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
};

const transition: Transition = { duration: 1.5 };

const Hero = () => {
  return (
    <motion.section
      className='py-2 md:px-4 h-full relative'
      variants={variants}
      initial='hide'
      animate='show'
    >
      <motion.div variants={variants} transition={transition}>
        <PrimaryHeading>Mohammad Reza Akhlaghian</PrimaryHeading>
        <SecondaryHeading>Web Developer | Designer</SecondaryHeading>
      </motion.div>
      <motion.div
        className='absolute w-full top-[30%] md:w-1/2 md:left-1/2 lg:w-1/3 lg:left-[60%] lg:top-[40%]'
        variants={variants}
        transition={transition}
      >
        <About />
      </motion.div>
    </motion.section>
  );
};
export default Hero;
