import { FC } from 'react';

import { BorderGradientButton } from '@components/Button';
import { Icons } from '@components/CustomIcons';

import styles from './feedbackHeader.module.scss';

interface FeedbackHeaderProps {
  t: (key: string) => string;
}

export const FeedbackHeader: FC<FeedbackHeaderProps> = ({ t }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{t('feedbacks.headerInfo.title')}</h2>
      <div className={styles.navButton}>
        <BorderGradientButton
          id="prevButton"
          aria-label="prevButton"
          isRounded="small"
          gradientDirection="toLeft"
          icon={<Icons.ArrowLeft />}
        />
        <BorderGradientButton
          id="nextButton"
          aria-label="nextButton"
          isRounded="small"
          gradientDirection="toRight"
          icon={<Icons.ArrowRight />}
        />
      </div>
    </div>
  );
};
