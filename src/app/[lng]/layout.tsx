import { dir } from 'i18next';

import { ReactNode } from 'react';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

import '../../styles/globals.scss';
import { languages } from '../i18n/settings';
import { Providers } from './providers';

export const metadata = {
  title: 'Smart UI - Web Application Development',
  description:
    'Smart UI specializes in building modern, high-quality web applications.',
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

interface Params {
  lng: string;
}

interface RootLayoutProps {
  children: ReactNode;
  params: Params;
}

export default function RootLayout({
  children,
  params: { lng },
}: RootLayoutProps) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <Providers lng={lng}>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
