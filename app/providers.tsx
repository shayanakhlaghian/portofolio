'use client';
import type { Variants, Transition } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

const pageVariants: Variants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition: Transition = {
  duration: 0.8,
  ease: 'easeOut',
  when: 'beforeChildren',
};

const Providers = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode='popLayout' key={pathname}>
      <motion.div
        className='w-full h-full'
        variants={pageVariants}
        initial='out'
        animate='in'
        exit='out'
        transition={pageTransition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
export default Providers;
