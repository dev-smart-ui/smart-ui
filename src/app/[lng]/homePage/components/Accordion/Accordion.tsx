'use client';

import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import { useAccordion } from '../../hooks/useAccordion';
import { Content } from './Content';

export const Accordion = () => {
  const { accordionData, headerInfo } = useAccordion();

  return (
    <Section>
      <Container>
        <SectionHeader
          sectionName={headerInfo.frequentlyAskedQuestions}
          title={headerInfo.title}
        />
        <Content data={accordionData} />
      </Container>
    </Section>
  );
};
