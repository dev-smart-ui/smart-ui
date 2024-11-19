import { FC } from 'react';

import { BorderGradientButton } from '@components/Button';
import { Icons } from '@components/CustomIcons';

import styles from './feedbackHeader.module.scss';

export const FeedbackHeader: FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>What Our Clients Say About Us</h2>
      <div className={styles.navButton}>
        <BorderGradientButton
          id="prevButton"
          isRounded="small"
          gradientDirection="toLeft"
          icon={<Icons.ArrowLeft />}
        />
        <BorderGradientButton
          id="nextButton"
          isRounded="small"
          gradientDirection="toRight"
          icon={<Icons.ArrowRight />}
        />
      </div>
    </div>
  );
};
