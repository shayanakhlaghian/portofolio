'use client';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Toggle from './Toggle';
import Nav from './Nav';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((isOpen) => !isOpen);

  return (
    <>
      <Toggle isOpen={isOpen} onClick={handleToggle} />
      <AnimatePresence>{isOpen && <Nav />}</AnimatePresence>
    </>
  );
};
export default Menu;
