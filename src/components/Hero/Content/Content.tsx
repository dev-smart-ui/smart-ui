import { FC } from 'react';

import { GradientText } from '@components/GradientText';

import styles from './content.module.scss';

interface ContentProps {
  t: (s: string) => string;
}

export const Content: FC<ContentProps> = ({ t }) => {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>
        {t('hero.title.main')}{' '}
        <GradientText color="Third">{t('hero.title.highlighted')}</GradientText>{' '}
        {t('hero.title.secondary')}
      </h1>
      <p className={styles.description}>{t('hero.description')}</p>
    </div>
  );
};
