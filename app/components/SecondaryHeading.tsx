const SecondaryHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className='text-sm md:text-2xl font-bold [&>*]:mr-2 last:mr-0 capitalize'>
      {children}
    </h2>
  );
};
export default SecondaryHeading;
