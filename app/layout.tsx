import './globals.css';
import type { Metadata } from 'next';
import { Poiret_One, Open_Sans } from 'next/font/google';

import Providers from './providers';
import Menu from './components/Menu';
import Logo from './components/Logo';

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
  title: 'Mohammad Reza Akhlaghian',
  description: 'Web Developer and Designer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${openSans.variable} ${poiretOne.variable}`}>
      <head>
        <link rel='shortcut icon' href='/logo.svg' />
      </head>
      <body className='bg-primary text-white h-[90vh] md:h-[92.5vh]'>
        <Menu />
        <div className='border-2 border-white m-6 h-full p-4 rounded-sm overflow-hidden relative'>
          <Providers>{children}</Providers>
          <Logo />
        </div>
      </body>
    </html>
  );
}
