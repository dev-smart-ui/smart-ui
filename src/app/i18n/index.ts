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

const runsOnServerSide = typeof window === 'undefined';

// Initialize i18next
i18next
  .use(initReactI18next)
  .use(LanguageDetector) // Detect the user's language on the client side
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`), // Dynamically import localization files
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

export function useTranslation(
  lng: string,
  ns: string,
  options?: UseTranslationOptions,
): UseTranslationResponse<string, undefined> {
  const [cookies, setCookie] = useCookies([cookieName]);
  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;

  // Manage the active language state
  const [activeLng, setActiveLng] = useState<string>(
    i18n.resolvedLanguage || lng || '',
  );

  // Effect to change the language on the server side
  useEffect(() => {
    if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  // Effect to sync the active language with i18n
  useEffect(() => {
    if (activeLng !== i18n.resolvedLanguage) {
      setActiveLng(i18n.resolvedLanguage || lng || '');
    }
  }, [activeLng, i18n.resolvedLanguage, lng]);

  // Effect to change the language if the provided lng differs from resolvedLanguage
  useEffect(() => {
    if (lng && i18n.resolvedLanguage !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  // Effect to store the selected language in a cookie
  useEffect(() => {
    if (cookies.i18next !== lng) {
      setCookie(cookieName, lng, { path: '/' });
    }
  }, [lng, cookies.i18next, setCookie]);

  return ret;
}
