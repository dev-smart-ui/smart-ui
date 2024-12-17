'use client';

import { IApproaches } from '@app-types/interfaces';

import { FC } from 'react';

import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import { Cards } from './Cards';

interface ApproachesProps {
  data: IApproaches;
}

export const Approaches: FC<ApproachesProps> = ({ data }) => {
  return (
    <Section>
      <Container>
        <SectionHeader
          sectionName={data?.sectionName}
          title={data?.title}
          description={data?.description}
        />
        <Cards data={data?.cards} />
      </Container>
    </Section>
  );
};
