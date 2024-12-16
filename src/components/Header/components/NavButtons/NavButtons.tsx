import { scrollToElement } from '@utils/index';

import { FC } from 'react';

import { Button } from '@components/Button';
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
      <Button
        onClick={() => scrollToElement('contactForm')}
        text={buttonLabel}
        className={styles.contactUsBtn}
      />
      <LanguageSwitcher />
      <BurgerMenu onClick={onToggle} />
    </div>
  );
};
