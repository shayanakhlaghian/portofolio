import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';

import NavItem from './NavItem';

const variants: Variants = {
  close: {
    top: '120%',
    transition: {
      duration: 0.3,
      staggerChildren: 0.3,
      when: 'afterChildren',
    },
  },
  open: (isOpen) => ({
    top: isOpen ? 0 : '120%',
    transition: {
      duration: 0.3,
      staggerChildren: 0.3,
      when: 'beforeChildren',
    },
  }),
};

const Nav = ({ isOpen }: { isOpen: boolean }) => {
  const items: { id: string; text: string; href: string }[] = [
    {
      id: 'i1',
      text: 'Home',
      href: '/',
    },
    {
      id: 'i2',
      text: "Skills 'n Stacks",
      href: '/stacks',
    },
    {
      id: 'i3',
      text: 'Contact',
      href: '/contact',
    },
  ];

  return (
    <motion.nav
      className='fixed bg-wisteria w-screen h-screen z-50'
      variants={variants}
      custom={isOpen}
      initial='close'
      animate='open'
      exit='close'
    >
      <ul className='absolute top-1/3 left-1/2 translate-x-[-50%]'>
        {items.map(({ id, text, href }) => (
          <NavItem key={id} href={href}>
            {text}
          </NavItem>
        ))}
      </ul>
    </motion.nav>
  );
};
export default Nav;
