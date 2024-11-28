'use client';

import 'swiper/css';
import 'swiper/css/navigation';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import { FeedbackHeader } from './FeedbackHeader';
import { Slider } from './Slider';
import styles from './clientFeedback.module.scss';

export const ClientFeedback: FC = () => {
  const { t } = useTranslation(['home', 'common']);

  return (
    <Section>
      <Container className={styles.additionalContentWrapper}>
        <Container>
          <SectionHeader
            position="left"
            sectionName={t('feedbacks.headerInfo.sectionName')}
          />
          <FeedbackHeader t={t} />
          <Slider t={t} />
        </Container>
      </Container>
    </Section>
  );
};
