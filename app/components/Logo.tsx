import Image from 'next/image';

const Logo = () => {
  return (
    <div className='w-36 h-36 md:w-64 md:h-64 lg:w-96 lg:h-96 absolute bottom-[-3rem] left-1/2 translate-x-[-50%] md:bottom-[-.5rem] md:left-[8%] animate-rotate z-[-1]'>
      <Image src='/logo.svg' alt='Logo' fill />
    </div>
  );
};
export default Logo;
