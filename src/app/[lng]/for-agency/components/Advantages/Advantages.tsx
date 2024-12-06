'use client';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import styles from './advantages.module.scss';

export const Advantages: FC = () => {
  const { t } = useTranslation('forAgency');

  const headerInfo = {
    sectionName: t('advantages.sectionName'),
    title: t('advantages.title'),
    subTitle: t('advantages.description'),
  };

  return (
    <Section>
      <Container className={styles.content}>
        <SectionHeader
          sectionName={headerInfo.sectionName}
          title={headerInfo.title}
          subTitle={headerInfo.subTitle}
        />
      </Container>
    </Section>
  );
};
