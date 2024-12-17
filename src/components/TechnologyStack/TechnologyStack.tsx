'use client';

import { IWorkAndCollaborate } from '@app-types/interfaces';
import Image from 'next/image';

import { FC } from 'react';

import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import styles from './technologyStack.module.scss';

interface TechnologyStackProps {
  data: IWorkAndCollaborate;
}

export const TechnologyStack: FC<TechnologyStackProps> = ({ data }) => {
  return (
    <Section>
      <Container>
        <SectionHeader title={data?.title} description={data?.description} />
        <div className={styles.image}>
          <Image
            src={data?.image?.data?.attributes?.url}
            width={1240}
            height={560}
            alt="servicesImage"
          />
        </div>
      </Container>
    </Section>
  );
};
