import Info from './components/Info';

const Contact = () => {
  return (
    <main className='w-full md:w-1/2 lg:w-[40%] mx-auto my-16 md:fixed md:right-[7.5%] md:top-[20%] lg:top-[25%] [&>*]:mb-10 last:mb-0 h-[60%] md:h-1/2 overflow-scroll lg:[&>*]:mb-1'>
      <Info type='E-mail' value='shayanakhlaghian@gmail.com' />
      <Info type='GitHub' value='github.com/shayanakhlaghian' />
    </main>
  );
};

export default Contact;
