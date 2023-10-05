import Link from 'next/link';

const NavItem = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li className='mb-6 md:mb-8 lg:mb-10 relative cursor-pointer border-2 text-center py-2 px-4 rounded-full hover:bg-white duration-200 group'>
      <Link
        href={href}
        className='font-poiret text-2xl md:text-3xl lg:text-4xl font-bold z-20 relative group-hover:bg-gradient-to-r group-hover:from-wisteria-light group-hover:to-wisteria-dark group-hover:bg-clip-text group-hover:text-transparent duration-200'
      >
        {children}
      </Link>
    </li>
  );
};
export default NavItem;
