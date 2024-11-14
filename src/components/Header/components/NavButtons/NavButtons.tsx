import { FC } from 'react';

import { BorderGradientButton } from '@components/Button';
import { BurgerMenu } from '@components/Header/components/Burger';

import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import styles from './navButtons.module.scss';

interface INavButtonsProps {
  onToggle: () => void;
}

export const NavButtons: FC<INavButtonsProps> = ({ onToggle }) => {
  return (
    <div className={styles.wrapper}>
      <BorderGradientButton text="Contact Us" className={styles.contactUsBtn} />
      <LanguageSwitcher />
      <BurgerMenu onClick={onToggle} />
    </div>
  );
};
