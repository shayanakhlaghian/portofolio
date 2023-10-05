import Link from 'next/link';
import PrimaryButton from './components/PrimaryButton';

const NotFound = () => {
  return (
    <div className='w-full md:w-1/2 my-32 mx-auto text-center'>
      <h1 className='font-poiret font-bold text-2xl md:text-4xl lg:text-6xl mb-8'>
        LOL, someone is lost!
      </h1>
      <PrimaryButton>
        <Link href='/' className='text-xl'>
          Get back home
        </Link>
      </PrimaryButton>
    </div>
  );
};
export default NotFound;
