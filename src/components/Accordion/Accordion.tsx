'use client';

import { IAccordionSection } from '@app-types/interfaces';

import { FC } from 'react';

import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import { Content } from './Content';

interface AccordionProps {
  data?: IAccordionSection;
}

export const Accordion: FC<AccordionProps> = ({ data }) => {
  return (
    <Section>
      <Container>
        <SectionHeader sectionName={data?.sectionName} title={data?.title} />
        <Content data={data?.cards || []} />
      </Container>
    </Section>
  );
};
