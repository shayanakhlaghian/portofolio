'use client';
import { Variants } from 'framer-motion';
import { motion } from 'framer-motion';

const variants: Variants = {
  show: { opacity: 1, transition: { staggerChildren: 1.25 } },
  hide: { opacity: 0 },
};

const Stacks = () => {
  return (
    <motion.main
      className='w-full md:w-1/2 lg:w-[40%] mx-auto my-16 md:fixed md:right-[7.5%] md:top-[20%] lg:top-[25%] [&>*]:mb-4 h-2/3 md:h-1/2 overflow-scroll text-center'
      variants={variants}
      initial='hide'
      animate='show'
    >
      <motion.h1
        className='font-poiret font-bold text-2xl md:text-3xl lg:text-4xl'
        variants={variants}
      >{`Skills 'n Stacks`}</motion.h1>
      <motion.p
        className='text-base md:text-xl lg:text-2xl tracking-wide'
        variants={variants}
      >
        Linux, Windows, HTML, CSS, Sass, JavaScript, TypeScript, Solidity,
        NodeJS, ExpressJS, ReactJS, NextJS, Redux, React Query, Socket.io,
        TailwindCSS, Styled Components, MongoDB, MySQL, NATS, Framer Motion,
        Figma, Git, GitHub, Docker, Kubernetes
      </motion.p>
    </motion.main>
  );
};
export default Stacks;
