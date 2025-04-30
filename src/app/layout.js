import localFont from 'next/font/local';
import './globals.css';
import RootLayout from './layouts/root/RootLayout';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const diatype = localFont({
  src: [
    {
      path: './fonts/ABCDiatype-Regular-Trial.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/ABCDiatype-RegularItalic-Trial.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/ABCDiatype-Medium-Trial.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/ABCDiatype-MediumItalic-Trial.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/ABCDiatype-Bold-Trial.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/ABCDiatype-BoldItalic-Trial.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/ABCDiatype-Light-Trial.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/ABCDiatype-LightItalic-Trial.woff2',
      weight: '300',
      style: 'italic',
    },
  ],
  variable: '--font-diatype',
});

export const metadata = {
  title: 'Moyi Abioye | Craft',
  description:
    'Some of my interactive React explorations & components mostly built with Tailwind & Framer Motion',
};

export default function Layout({ children }) {
  return (
    <html lang='en' className={`${diatype.variable} ${inter.variable}`}>
      <body className='antialiased'>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
