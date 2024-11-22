'use client';

import 'swiper/css';
import 'swiper/css/navigation';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { TextGradientBackground } from '@components/TextGradientBackgraund';

import { FeedbackHeader } from './FeedbackHeader';
import { Slider } from './Slider';

export const ClientFeedback: FC = () => {
  const { t } = useTranslation(['home', 'common']);

  return (
    <Section>
      <Container>
        <TextGradientBackground>
          {t('feedbacks.headerInfo.clientFeedback')}
        </TextGradientBackground>
        <FeedbackHeader t={t} />
        <Slider t={t} />
      </Container>
    </Section>
  );
};
