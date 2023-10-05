const PrimaryHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className='text-xl md:text-4xl lg:text-6xl tracking-wide font-light uppercase font-poiret'>
      {children}
    </h1>
  );
};
export default PrimaryHeading;
