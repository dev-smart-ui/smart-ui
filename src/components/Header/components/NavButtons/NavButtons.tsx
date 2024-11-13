'use client';

import { usePathname, useRouter } from 'next/navigation';

import { BorderGradientButton } from '@components/Button';

import styles from './navButtons.module.scss';

export const NavButtons = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (lng: string) => {
    const segments = pathname.split('/');
    segments[1] = lng;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <div className={styles.wrapper}>
      <BorderGradientButton text="Contact Us" />
      <button onClick={() => handleLanguageChange('en')}>EN</button>
      <button onClick={() => handleLanguageChange('ua')}>UA</button>
    </div>
  );
};
