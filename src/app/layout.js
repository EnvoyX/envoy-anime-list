import {
  Geist,
  Geist_Mono,
  Inter,
  Poppins,
  Montserrat,
} from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata = {
  title: 'EnvoyAnimeList',
  description: 'Website Anime Indonesia Anjay',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased bg-color-dark`}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
