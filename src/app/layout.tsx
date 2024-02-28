import { type ReactNode } from 'react';
import './globals.css';
import { iconLink } from '../introduction.js';

const baseTitle = 'T6a = Teruhisa';
const baseUrl = 'https://t6a.dev';
const baseDescription = `This is Teruhisa's personal web site.`;

const Meta = () => {
  return (
    <>
      <title>{baseTitle}</title>
      <meta property="description" content={baseTitle} />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:site_name" content={baseTitle} />
      <meta property="og:title" content={baseTitle} />
      <meta property="og:description" content={baseDescription} />
      <meta property="og:type" content="website" />
      <link rel="icon" type="image/jpeg" href={iconLink} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@t6adev" />
    </>
  );
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Meta />
      <div id="__waku" className="py-12 px-8 md:px-24">
        {children}
      </div>
    </>
  );
}
