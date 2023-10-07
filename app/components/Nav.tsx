import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';

import NavItem from './NavItem';

const variants: Variants = {
  close: {
    y: '100%',
    transition: {
      type: 'tween',
      when: 'afterChildren',
      staggerChildren: 0.45,
      duration: 0.6,
    },
  },
  open: {
    y: '-12.5%',
    transition: {
      type: 'tween',
      when: 'beforeChildren',
      staggerChildren: 0.45,
      duration: 0.6,
    },
  },
};

interface Item {
  id: string;
  text: string;
  href: string;
}

const Nav = ({
  items,
  onItemClicked,
}: {
  items: Item[];
  onItemClicked: (href: string) => void;
}) => {
  return (
    <motion.nav
      className='fixed bg-gradient-to-br from-secondary to-secondary-dark w-screen h-[125%] z-50'
      variants={variants}
      initial='close'
      animate='open'
      exit='close'
    >
      <ul className='absolute top-1/3 left-1/2 translate-x-[-50%]'>
        {items.map(({ id, text, href }) => (
          <NavItem key={id} onClick={() => onItemClicked(href)}>
            {text}
          </NavItem>
        ))}
      </ul>
    </motion.nav>
  );
};
export default Nav;
