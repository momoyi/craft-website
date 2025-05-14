import localFont from 'next/font/local';
import './globals.css';
import RootLayout from './layouts/root/RootLayout';
import { Inter, Nunito_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const nunito = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito',
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

const sfPro = localFont({
  src: [
    {
      path: './fonts/sf pro/SF-Pro-Text-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/sf pro/SF-Pro-Display-RegularItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/sf pro/SF-Pro-Text-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/sf pro/SF-Pro-Display-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
  ],
  variable: '--font-sf-pro',
});

export const metadata = {
  title: 'Moyi Abioye | Craft',
  description:
    'Some of my interactive React explorations & components mostly built with Tailwind & Framer Motion',
};

export default function Layout({ children }) {
  return (
    <html
      lang='en'
      className={`${diatype.variable} ${inter.variable}  ${sfPro.variable} ${nunito.variable}`}
    >
      <body className='antialiased'>
        <RootLayout>{children}</RootLayout>
        <Analytics />
      </body>
    </html>
  );
}
