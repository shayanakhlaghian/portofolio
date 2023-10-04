import type { Variants, Transition } from 'framer-motion';
import { motion } from 'framer-motion';

const transition: Transition = { duration: 0.5 };

const Toggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className='fixed right-12 top-12 lg:top-14 lg:right-14 grid grid-cols-2 grid-rows-2 gap-1 cursor-pointer z-[100]'
      onClick={onClick}
    >
      <motion.span
        className='border-2 border-white w-3 h-3 md:w-4 md:h-4 rounded-full'
        animate={{ backgroundColor: isOpen ? 'white' : 'transparent' }}
        transition={transition}
      />
    </button>
  );
};
export default Toggle;
