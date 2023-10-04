import './globals.css';
import type { Metadata } from 'next';
import { Poiret_One, Open_Sans } from 'next/font/google';

import Menu from './components/Menu';

const poiretOne = Poiret_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-poiret-one',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${openSans.variable} ${poiretOne.variable}`}>
      <body className='bg-night text-white h-[90vh] md:h-[92.5vh]'>
        <Menu />
        <div className='border-2 border-white m-6 h-full p-4 rounded-sm overflow-hidden'>
          {children}
        </div>
      </body>
    </html>
  );
}
