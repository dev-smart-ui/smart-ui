'use client';

import React, { createContext, useContext } from 'react';

import { useTranslation as useI18nextTranslation } from '../app/i18n/client';

const LanguageContext = createContext<string>('en');

export const LanguageProvider = ({
  lng,
  children,
}: {
  lng: string;
  children: React.ReactNode;
}) => {
  useI18nextTranslation(lng);
  return (
    <LanguageContext.Provider value={lng}>{children}</LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
