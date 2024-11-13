import { usePathname, useRouter } from 'next/navigation';

import { useTranslation } from 'react-i18next';

import { BorderGradientButton } from '@components/Button';

export const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { i18n } = useTranslation();

  const handleLanguageChange = async () => {
    const newLanguage = i18n.language === 'ua' ? 'en' : 'ua';

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
      text={i18n.language.toUpperCase()}
      onClick={handleLanguageChange}
    />
  );
};
