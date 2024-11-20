'use client';

import 'swiper/css';
import 'swiper/css/navigation';

import { FC } from 'react';

import { Button } from '@components/Button';
import { Container } from '@components/Container';

import { FeedbackHeader } from './FeedbackHeader';
import { Slider } from './Slider';
import styles from './clientFeedback.module.scss';

export const ClientFeedback: FC = () => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <Button isGradient text="Clent Feedback" />
        <FeedbackHeader />
        <Slider />
      </Container>
    </section>
  );
};
