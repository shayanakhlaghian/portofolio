'use client';
import { TypeAnimation } from 'react-type-animation';

const Info = ({ type, value }: { type: string; value: string }) => {
  return (
    <div className='flex flex-col items-center'>
      <p className='font-poiret font-bold text-3xl tracking-wider mb-2'>
        {type}
      </p>
      <TypeAnimation className='md:text-xl' sequence={[value]} speed={15} />
    </div>
  );
};
export default Info;
