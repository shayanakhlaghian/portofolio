'use client';
import type { Variants, Transition } from 'framer-motion';
import { motion } from 'framer-motion';

import About from './About';

const variants: Variants = {
  hide: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
};

const transition: Transition = { duration: 1 };

const Hero = () => {
  return (
    <motion.section
      className='py-2 md:px-4 h-full relative'
      variants={variants}
      initial='hide'
      animate='show'
    >
      <motion.h1
        className='text-2xl md:text-4xl lg:text-7xl tracking-wide mb-1 md:mb-2 font-light'
        variants={variants}
        transition={transition}
      >
        Shayan Akhlaghian
      </motion.h1>
      <motion.h2
        className='text-sm md:text-2xl font-bold [&>*]:mr-2 last:mr-0'
        variants={variants}
        transition={transition}
      >
        Web Developer | Designer
      </motion.h2>
      <motion.div
        className='absolute w-full top-[40%] md:w-1/2 md:left-1/2 lg:w-1/3 lg:left-[60%]'
        variants={variants}
        transition={transition}
      >
        <About />
      </motion.div>
    </motion.section>
  );
};
export default Hero;
