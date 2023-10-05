const PrimaryButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      className='text-secondary-dark font-bold relative text-sm lg:text-lg group'
      onClick={onClick}
    >
      <span className='w-6 h-6 lg:w-7 lg:h-7 bg-white rounded-full absolute z-[2] top-1/2 translate-y-[-50%] translate-x-[-10%] group-hover:w-[120%] duration-200' />
      <span className='relative z-[3]'>{children}</span>
    </button>
  );
};
export default PrimaryButton;
