'use client';

import 'swiper/css';
import 'swiper/css/navigation';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@components/Button';
import { Container } from '@components/Container';

import { FeedbackHeader } from './FeedbackHeader';
import { Slider } from './Slider';
import styles from './clientFeedback.module.scss';

export const ClientFeedback: FC = () => {
  const { t } = useTranslation(['home', 'common']);

  return (
    <section className={styles.wrapper}>
      <Container>
        <Button
          isGradient
          text={t('buttons.clientFeedback', { ns: 'common' })}
        />
        <FeedbackHeader t={t} />
        <Slider t={t} />
      </Container>
    </section>
  );
};
