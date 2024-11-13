'use client';

import { BorderGradientButton } from '@components/Button';
import { Icons } from '@components/CustomIcons';
import { LanguageSwitcher } from '@components/Header/components/LanguageSwitcher/LanguageSwitcher';

import styles from './navButtons.module.scss';

export const NavButtons = () => {
  return (
    <div className={styles.wrapper}>
      <BorderGradientButton text="Contact Us" />
      <LanguageSwitcher />
      <BorderGradientButton
        isMonotoneBorder
        isRounded="small"
        icon={<Icons.Sun />}
      />
    </div>
  );
};
