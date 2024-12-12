import { FC } from 'react';

import { BorderGradientButton } from '@components/Button';
import { Icons } from '@components/CustomIcons';

import styles from './feedbackHeader.module.scss';

interface FeedbackHeaderProps {
  title: string;
}

export const FeedbackHeader: FC<FeedbackHeaderProps> = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
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
