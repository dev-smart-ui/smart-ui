import { dir } from 'i18next';

import { ReactNode } from 'react';

import '../../styles/globals.scss';
import { languages } from '../i18n/settings';
import { JsonLd } from '@components/JsonLd';
import { Providers } from './providers';

const OG_IMAGE = 'https://www.smart-ui.pro/assets/og-image.png';
const BASE_URL = 'https://www.smart-ui.pro';

export const metadata = {
  title: 'AI Automation & Software Development Company | Smart-UI',
  description:
    'Smart-UI builds web applications, custom AI agents, and business workflow automation for companies in the EU, UK, US, and Australia. 315+ projects since 2018.',
  icons: { icon: '/assets/favicon.png' },
  metadataBase: new URL(BASE_URL),
  openGraph: {
    siteName: 'Smart-UI',
    type: 'website' as const,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Smart-UI' }],
  },
  twitter: {
    card: 'summary_large_image' as const,
    images: [OG_IMAGE],
  },
  alternates: {
    languages: {
      en: `${BASE_URL}/en`,
      uk: `${BASE_URL}/uk-UA`,
    },
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Smart-UI',
  url: 'https://smart-ui.pro',
  logo: 'https://res.cloudinary.com/smart-ui/image/upload/v1734344811/logo_3a19343784.png',
  foundingDate: '2018',
  address: [
    { '@type': 'PostalAddress', addressCountry: 'ES' },
    { '@type': 'PostalAddress', addressCountry: 'UA' },
  ],
  sameAs: [
    'https://clutch.co/profile/smart-ui',
    'https://www.linkedin.com/company/smart-ui',
    'https://www.upwork.com/agencies/smart-ui/',
    'https://www.behance.net/smart-ui',
  ],
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
        <JsonLd data={organizationJsonLd} />
        <Providers lng={lng}>{children}</Providers>
      </body>
    </html>
  );
}
