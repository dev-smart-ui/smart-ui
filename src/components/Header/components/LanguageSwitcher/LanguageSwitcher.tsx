import { useLanguage } from '@context/LanguageContext';
import { usePathname, useRouter } from 'next/navigation';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { BorderGradientButton } from '@components/Button';

export const LanguageSwitcher: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { i18n } = useTranslation();
  const lng = useLanguage();

  const handleLanguageChange = async () => {
    const newLanguage = i18n.language === 'uk-UA' ? 'en' : 'uk-UA';

    await i18n.changeLanguage(newLanguage);
    const segments = pathname.split('/');
    segments[1] = newLanguage;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <BorderGradientButton
      isMonotoneBorder
      isRounded="small"
      text={(lng === 'uk-UA' ? 'en' : 'ua').toUpperCase()}
      onClick={handleLanguageChange}
    />
  );
};
