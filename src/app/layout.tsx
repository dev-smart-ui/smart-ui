import { ReactNode } from 'react';

import '../styles/globals.scss';

export const metadata = {
  title: 'Smart UI - Web Application Development',
  description:
    'Smart UI specializes in building modern, high-quality web applications.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
