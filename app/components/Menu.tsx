'use client';
import { useState } from 'react';

import Toggle from './Toggle';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((isOpen) => !isOpen);

  return <Toggle isOpen={isOpen} onClick={handleToggle} />;
};
export default Menu;
