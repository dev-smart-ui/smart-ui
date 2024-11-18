'use client';

import i18next, { InitOptions } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';

import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import {
  UseTranslationResponse,
  initReactI18next,
  useTranslation as useTranslationOrg,
} from 'react-i18next';

import { cookieName, getOptions, languages } from './settings';

// Check if the code is running on the server
const runsOnServerSide = typeof window === 'undefined';

// Initialize i18next
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`),
    ),
  )
  .init({
    ...getOptions(),
    lng: undefined,
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: runsOnServerSide ? languages : [],
  } as InitOptions);

interface UseTranslationOptions {
  keyPrefix?: string;
}

// Custom useTranslation hook with client and server handling
export function useTranslation(
  lng: string,
  ns?: string | string[],
  options?: UseTranslationOptions,
): UseTranslationResponse<string, undefined> {
  const [cookies, setCookie] = useCookies([cookieName]); // Access cookies for language storage
  const ret = useTranslationOrg(ns, options); // Use the original useTranslation hook
  const { i18n } = ret;

  // State for managing the active language
  const [activeLng, setActiveLng] = useState<string>(
    i18n.resolvedLanguage || lng || '', // Initialize with resolved language or provided language
  );

  // Server-side logic: directly change the language if on the server
  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng); // Update the language on the server side
  }

  // Effect to synchronize the active language on the client side
  useEffect(() => {
    if (!runsOnServerSide && activeLng !== i18n.resolvedLanguage) {
      setActiveLng(i18n.resolvedLanguage || lng || ''); // Update the active language
    }
  }, [activeLng, i18n.resolvedLanguage, lng]);

  // Effect to change the language if it differs from the resolved language
  useEffect(() => {
    if (!runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
      i18n.changeLanguage(lng); // Change the language dynamically
    }
  }, [lng, i18n]);

  // Effect to save the selected language in cookies
  useEffect(() => {
    if (!runsOnServerSide && cookies.i18next !== lng) {
      setCookie(cookieName, lng, { path: '/' }); // Store the language in a cookie
    }
  }, [lng, cookies.i18next, setCookie]);

  return ret; // Return the original hook's response with the updated i18n instance
}
