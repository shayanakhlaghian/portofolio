'use client';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';

import Toggle from './Toggle';
import Nav from './Nav';

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

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [selectedPath, setSelectedPath] = useState(pathname);
  const { push } = useRouter();

  useEffect(() => {
    setIsOpen(false);
  }, [selectedPath]);

  const handleCurrentPathChange = (href: string) => setSelectedPath(href);

  const handlePageChange = () => {
    if (selectedPath === pathname) return;

    push(selectedPath);
  };

  const handleToggle = () => setIsOpen((isOpen) => !isOpen);

  return (
    <>
      <Toggle isOpen={isOpen} onClick={handleToggle} />
      <AnimatePresence onExitComplete={handlePageChange}>
        {isOpen && (
          <Nav items={items} onItemClicked={handleCurrentPathChange} />
        )}
      </AnimatePresence>
    </>
  );
};
export default Menu;
