'use client';

import { IClientSection } from '@app-types/interfaces';
import 'swiper/css';
import 'swiper/css/navigation';

import { FC } from 'react';

import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import { FeedbackHeader } from './FeedbackHeader';
import { Slider } from './Slider';
import styles from './clientFeedback.module.scss';

interface ClientFeedbackProps {
  data: IClientSection;
}

export const ClientFeedback: FC<ClientFeedbackProps> = ({ data }) => {
  return (
    <Section>
      <Container className={styles.additionalContentWrapper}>
        <Container>
          <SectionHeader position="left" sectionName={data?.sectionName} />
          <FeedbackHeader title={data?.title} />
          <Slider data={data?.feedbacks} />
        </Container>
      </Container>
    </Section>
  );
};
