'use client';

import { IOurServiceSection } from '@app-types/interfaces';

import { FC } from 'react';

import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import { Services } from './Services';
import styles from './ourServices.module.scss';

interface OurServicesProps {
  data: IOurServiceSection;
}

export const OurServices: FC<OurServicesProps> = ({ data }) => {
  return (
    <Section>
      <Container className={styles.content}>
        <SectionHeader sectionName={data?.sectionName} title={data?.title} />
        <Services cards={data?.cards} />
      </Container>
    </Section>
  );
};
