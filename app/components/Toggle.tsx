const Span = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <span
      className='w-4 h-4 lg:w-4 lg:h-4 rounded-full border-2 border-white duration-300'
      style={{ backgroundColor: isOpen ? 'white' : 'transparent' }}
    />
  );
};

const Toggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  const spanIds: number[] = [1, 2, 3, 4];

  return (
    <button
      className='fixed right-10 top-12 lg:top-14 lg:right-14 grid grid-cols-2 grid-rows-2 cursor-pointer z-[100] duration-200'
      style={{ gap: isOpen ? 0 : '.25rem' }}
      onClick={onClick}
    >
      {spanIds.map((id) => (
        <Span key={id} isOpen={isOpen} />
      ))}
    </button>
  );
};
export default Toggle;
