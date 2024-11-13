import { useTranslation } from 'react-i18next';

import styles from './navButtons.module.scss';

export const NavButtons = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.wrapper}>
      <button>Contact Us</button>
      <button onClick={() => handleLanguageChange('en')}>EN</button>
      <button onClick={() => handleLanguageChange('ua')}>UA</button>
    </div>
  );
};
