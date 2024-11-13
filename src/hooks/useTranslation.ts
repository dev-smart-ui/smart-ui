import { useLanguage } from '@context/LanguageContext';

import { useTranslation as useI18nextTranslation } from '../app/i18n/client';

export const useTranslation = (namespace: string) => {
  const lng = useLanguage();
  const { t } = useI18nextTranslation(lng, namespace);

  return { t, lng };
};
