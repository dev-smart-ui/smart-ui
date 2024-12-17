'use client';

import { IHeaderInfo } from '@app-types/global';
import { IExpert } from '@app-types/interfaces';

import { FC } from 'react';

import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import { Team } from './components/Team';

interface OurExpertsProps {
  data: IExpert[];
  headerInfo: IHeaderInfo;
}

export const OurExperts: FC<OurExpertsProps> = ({ data, headerInfo }) => {
  return (
    <Section>
      <Container>
        <SectionHeader
          sectionName={headerInfo?.sectionName}
          title={headerInfo?.title}
          description={headerInfo?.description}
        />
        <Team data={data} />
      </Container>
    </Section>
  );
};
