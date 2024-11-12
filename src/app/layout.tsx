import { ReactNode } from 'react';

import '../styles/globals.scss';
import { Providers } from './providers';

export const metadata = {
  title: 'Smart UI - Web Application Development',
  description:
    'Smart UI specializes in building modern, high-quality web applications.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
