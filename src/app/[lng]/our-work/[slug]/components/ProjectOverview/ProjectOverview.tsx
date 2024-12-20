'use client';

import { IProjectOverviewData } from '@app-types/interfaces';

import { FC } from 'react';

import { Card } from '@components/Card';
import { Container } from '@components/Container';
import { Section } from '@components/Section';

import { BottomBlock } from './BottomBlock';
import styles from './projectOverview.module.scss';

interface ProjectOverviewProps {
  data: IProjectOverviewData;
}

export const ProjectOverview: FC<ProjectOverviewProps> = ({ data }) => {
  return (
    <Section>
      <Container className={styles.wrapper}>
        <Card className={styles.card} {...data} titleTag="h2" />
        <BottomBlock data={data?.strategicRoadmap} />
      </Container>
    </Section>
  );
};
