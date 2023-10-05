import type { Transition, Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import Link from 'next/link';

const variants: Variants = {
  close: { opacity: 0 },
  open: { opacity: 1 },
};

const transition: Transition = { duration: 0.3 };

const NavItem = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <motion.li
      variants={variants}
      transition={transition}
      className='mb-6 md:mb-8 lg:mb-10 group bg-transparent py-[.2rem] md:py-2 px-4 rounded-full group hover:bg-white text-center'
    >
      <button
        className='font-poiret text-2xl md:text-3xl lg:text-4xl font-bold group-hover:text-secondary-dark'
        onClick={onClick}
      >
        <span className='line-clamp-1'>{children}</span>
      </button>
    </motion.li>
  );
};
export default NavItem;
