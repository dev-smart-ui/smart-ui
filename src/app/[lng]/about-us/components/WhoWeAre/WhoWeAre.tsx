'use client';

import { IWhoWeAre } from '@app-types/interfaces';

import { FC } from 'react';

import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import styles from './whoWeAre.module.scss';

interface WhoWeAreProps {
  data: IWhoWeAre;
}

export const WhoWeAre: FC<WhoWeAreProps> = ({ data }) => {
  return (
    <Section>
      <Container className={styles.content}>
        <SectionHeader
          className={styles.sectionHeader}
          sectionName={data?.sectionName}
          title={data?.title}
          description={data?.description}
        />
      </Container>
    </Section>
  );
};
