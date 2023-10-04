import type { Transition, Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import Link from 'next/link';

const variants: Variants = {
  close: { opacity: 0 },
  open: { opacity: 1 },
};

const transition: Transition = { duration: 2 };

const NavItem = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <motion.li
      className='mb-6 md:mb-8 lg:mb-10 relative group cursor-pointer'
      variants={variants}
      transition={transition}
    >
      <span className='w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white rounded-full inline-block absolute translate-x-[-3rem] md:translate-x-[-3.5rem] lg:translate-x-[-4rem] top-1/2 translate-y-[-50%] group-hover:w-[150%] duration-200 z-10' />
      <Link
        href={href}
        className='font-poiret text-2xl md:text-3xl lg:text-4xl font-bold group-hover:text-wisteria z-20 relative duration-200'
      >
        {children}
      </Link>
    </motion.li>
  );
};
export default NavItem;
