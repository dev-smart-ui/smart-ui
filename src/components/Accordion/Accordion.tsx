'use client';

import { useLocaleAccordionData } from '@components/Accordion/hooks/useLocaleAccordionData';
import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import { Content } from './Content';

export const Accordion = () => {
  const { accordionData, headerInfo } = useLocaleAccordionData();

  return (
    <Section>
      <Container>
        <SectionHeader
          sectionName={headerInfo.sectionName}
          title={headerInfo.title}
        />
        <Content data={accordionData} />
      </Container>
    </Section>
  );
};
