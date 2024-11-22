'use client';

import { IProjectData } from '@app-types/interfaces';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import { Projects } from './Projects';
import styles from './ourWork.module.scss';

interface OurWorkProps {
  data?: IProjectData[];
}

export const OurWork: FC<OurWorkProps> = ({ data }) => {
  const { t } = useTranslation('home');
  const title = {
    main: t('ourWork.headerInfo.title.main'),
    highlighted: t('ourWork.headerInfo.title.highlighted'),
  };

  return (
    <Section>
      <Container className={styles.content}>
        <SectionHeader
          sectionName={t('ourWork.headerInfo.ourWork')}
          title={title}
        />
        <Projects data={data} />
      </Container>
    </Section>
  );
};
