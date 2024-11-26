import { scrollToElement } from '@utils/scrollToElement';

import { FC } from 'react';

import { BorderGradientButton } from '@components/Button';
import { BurgerMenu } from '@components/Header/components/Burger';

import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import styles from './navButtons.module.scss';

interface INavButtonsProps {
  onToggle: () => void;
  buttonLabel: string;
}

export const NavButtons: FC<INavButtonsProps> = ({ onToggle, buttonLabel }) => {
  return (
    <div className={styles.wrapper}>
      <BorderGradientButton
        onClick={() => scrollToElement('contactForm')}
        text={buttonLabel}
        className={styles.contactUsBtn}
      />
      <LanguageSwitcher />
      <BurgerMenu onClick={onToggle} />
    </div>
  );
};
