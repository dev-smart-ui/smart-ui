import { LanguageProvider } from '@context/LanguageContext';

import { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
  lng: string;
}

export const Providers = ({ children, lng }: ProvidersProps) => {
  return <LanguageProvider lng={lng}>{children}</LanguageProvider>;
};
