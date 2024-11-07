import { ReactNode } from 'react';

export const metadata = {
  title: 'Smart UI - Web Application Development',
  description:
    'Smart UI specializes in building modern, high-quality web applications. Our team crafts custom user interfaces tailored to meet your business needs.',
  openGraph: {
    title: 'Smart UI - Web Application Development',
    description:
      'Smart UI is a team of experts in web application development, dedicated to creating efficient and user-friendly interfaces that drive business success.',
    url: 'https://smart-ui.pro/',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
