'use client';

import React, { createContext, useContext } from 'react';

const LanguageContext = createContext<string>('en');

export const LanguageProvider = ({
  lng,
  children,
}: {
  lng: string;
  children: React.ReactNode;
}) => {
  return (
    <LanguageContext.Provider value={lng}>{children}</LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
