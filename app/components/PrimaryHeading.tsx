const PrimaryHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className='text-2xl md:text-4xl lg:text-6xl tracking-wide mb-1 md:mb-2 font-light uppercase font-poiret'>
      {children}
    </h1>
  );
};
export default PrimaryHeading;
