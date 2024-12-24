'use client';

import { IAdvantagesForAgency } from '@app-types/interfaces';

import { FC } from 'react';

import { Container } from '@components/Container';
import { InfoCards } from '@components/InfoCards';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import { Solutions } from './Solutions';
import { Technologies } from './Technologies';
import styles from './solution.module.scss';

interface AdvantagesProps {
  data: IAdvantagesForAgency;
}

export const Solution: FC<AdvantagesProps> = ({ data }) => {
  return (
    <Section className={styles.section}>
      <Container className={styles.content}>
        <div className={styles.advantages}>
          <SectionHeader
            className={styles.sectionHeader}
            sectionName={data?.sectionName}
            title={data?.title}
            description={data?.description}
          />
          {data?.cards?.length > 0 && (
            <InfoCards data={data?.cards} className={styles.infoCards} />
          )}
          {data?.technologiesList?.length > 0 && (
            <Technologies
              title={data?.technologiesTitle}
              data={data?.technologiesList}
            />
          )}
        </div>
        <Solutions data={data} />
      </Container>
    </Section>
  );
};
