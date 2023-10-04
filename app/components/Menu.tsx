'use client';

import { useState } from 'react';

import Toggle from './Toggle';
import Nav from './Nav';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((isOpen) => !isOpen);

  return (
    <>
      <Toggle isOpen={isOpen} onClick={handleToggle} />
      <Nav isOpen={isOpen} />
    </>
  );
};
export default Menu;
