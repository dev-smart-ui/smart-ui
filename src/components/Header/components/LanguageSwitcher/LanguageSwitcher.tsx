import { useLanguage } from '@context/LanguageContext';
import { usePathname, useRouter } from 'next/navigation';

import { BorderGradientButton } from '@components/Button';

export const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const lng = useLanguage();

  const handleLanguageChange = () => {
    const newLanguage = lng === 'en' ? 'ua' : 'en';
    const segments = pathname.split('/');
    segments[1] = newLanguage;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <BorderGradientButton
      isMonotoneBorder
      isRounded="small"
      text={lng.toUpperCase()}
      onClick={handleLanguageChange}
    />
  );
};
