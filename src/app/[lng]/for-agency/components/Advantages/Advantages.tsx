'use client';

import { IAdvantagesForAgency } from '@app-types/interfaces';

import { FC } from 'react';

import { Container } from '@components/Container';
import { InfoCards } from '@components/InfoCards';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import { Solutions } from './Solutions';
import styles from './advantages.module.scss';

interface AdvantagesProps {
  data: IAdvantagesForAgency;
}

export const Advantages: FC<AdvantagesProps> = ({ data }) => {
  return (
    <Section>
      <Container className={styles.content}>
        <div className={styles.advantages}>
          <SectionHeader
            className={styles.sectionHeader}
            sectionName={data?.sectionName}
            title={data?.title}
            description={data?.description}
          />
          <InfoCards data={data?.cards} className={styles.infoCards} />
        </div>
        <Solutions data={data} />
      </Container>
    </Section>
  );
};
