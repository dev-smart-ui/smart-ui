'use client';

import { IProjectLifecycle } from '@app-types/interfaces';

import { FC } from 'react';

import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import { LifecycleCards } from './LifecycleCards';
import styles from './projectLifecycle.module.scss';

interface ProjectLifecycleProps {
  data: IProjectLifecycle;
}

export const ProjectLifecycle: FC<ProjectLifecycleProps> = ({ data }) => {
  return (
    <Section>
      <Container className={styles.wrapper}>
        <SectionHeader title={data?.title} position="left" />
        <LifecycleCards data={data?.cards} />
      </Container>
    </Section>
  );
};
