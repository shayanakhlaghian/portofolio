import type { Variants, Transition } from 'framer-motion';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const MotionType = motion(TypeAnimation);

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

const About = () => {
  return (
    <>
      <motion.h3
        className='capitalize text-xl font-bold tracking-wide mb-1 md:mb-2 md:text-2xl lg:text-3xl'
        variants={variants}
        transition={transition}
      >
        About me
      </motion.h3>
      <MotionType
        sequence={[
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore beatae suscipit cupiditate, nobis ipsa nam. Voluptatem rerum asperiores nemo nobis? Odit eligendi voluptate blanditiis quod ipsam. Sint aliquid doloremque atque, porro beatae obcaecati qui necessitatibus eveniet inventore, a fuga quam delectus molestias enim magni aut dolor, officia pariatur modi ipsum.',
        ]}
        wrapper='p'
        speed={55}
        className='text-sm md:text-base lg:text-lg'
        variants={variants}
        transition={transition}
      />
    </>
  );
};
export default About;
