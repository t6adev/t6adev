import { type ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import './globals.css';
import { iconLink } from '../introduction';

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
});

const baseTitle = 'T6a = Teruhisa';
const baseUrl = 'https://t6a.dev';
const baseDescription = `This is Teruhisa's personal web site.`;

export const metadata = {
  title: baseTitle,
  description: baseDescription,
  icons: [{ rel: 'icon', url: iconLink }],
  openGraph: {
    url: baseUrl,
    title: baseTitle,
    description: baseDescription,
  },
  twitter: {
    site: '@t6adev',
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} bg-[#292929] text-white`}>
      <body>
        <div className="py-12 px-8 md:px-24">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
