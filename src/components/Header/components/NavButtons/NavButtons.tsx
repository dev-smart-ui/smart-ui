import { FC } from 'react';

import { BorderGradientButton } from '@components/Button';
import { BurgerMenu } from '@components/Header/components/Burger';

import { useTranslation } from '@hooks/useTranslation';

import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import styles from './navButtons.module.scss';

interface INavButtonsProps {
  onToggle: () => void;
}

export const NavButtons: FC<INavButtonsProps> = ({ onToggle }) => {
  const { t } = useTranslation(['header', 'common']);

  return (
    <div className={styles.wrapper}>
      <BorderGradientButton
        text={t('buttons.contact', { ns: 'common' })}
        className={styles.contactUsBtn}
      />
      <LanguageSwitcher />
      <BurgerMenu onClick={onToggle} />
    </div>
  );
};
