import { useLanguage } from '@context/LanguageContext';
import { ROUTES } from '@routes/index';
import Link from 'next/link';

import { FC } from 'react';

import { BurgerMenu } from '@components/Header/components/Burger';

import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import styles from './navButtons.module.scss';

interface INavButtonsProps {
  onToggle: () => void;
  buttonLabel: string;
}

export const NavButtons: FC<INavButtonsProps> = ({ onToggle, buttonLabel }) => {
  const lng = useLanguage();
  return (
    <div className={styles.wrapper}>
      <Link
        href={`/${lng}${ROUTES.CONTACT_US}`}
        className={styles.contactUsBtn}
      >
        {buttonLabel}
      </Link>
      <LanguageSwitcher />
      <BurgerMenu onClick={onToggle} />
    </div>
  );
};
