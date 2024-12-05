import { dir } from 'i18next';

import { ReactNode } from 'react';

export const metadata = {
  title: 'Smart UI - Web Application Development',
  description:
    'Smart UI specializes in building modern, high-quality web applications.',
  icons: {
    icon: '/assets/favicon.png',
  },
};

interface Params {
  lng: string;
}

interface NotFoundLayoutProps {
  children: ReactNode;
  params: Params;
}

export default function NotFoundLayout({
  children,
  params: { lng },
}: NotFoundLayoutProps) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
