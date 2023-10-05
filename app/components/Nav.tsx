import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';

import NavItem from './NavItem';

const variants: Variants = {
  close: {
    y: '100%',
    transition: {
      type: 'tween',
      when: 'afterChildren',
      staggerChildren: 0.3,
      duration: 0.3,
    },
  },
  open: {
    y: 0,
    transition: {
      type: 'tween',
      when: 'beforeChildren',
      staggerChildren: 0.3,
      duration: 0.3,
    },
  },
};

const Nav = () => {
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
      className='fixed bg-gradient-to-br from-secondary to-secondary-dark w-screen h-screen z-50'
      variants={variants}
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
