'use client';

import { IHeaderInfo } from '@app-types/global';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import styles from './drivingSuccess.module.scss';

export const DrivingSuccess: FC = () => {
  const { t } = useTranslation('aboutUs');

  const headerInfo: IHeaderInfo = {
    sectionName: t('drivingSuccess.sectionName'),
    title: {
      part1: t('drivingSuccess.title.main'),
      gradientPart: t('drivingSuccess.title.highlighted'),
      color1: '#2865B0',
      color2: '#3B8FF3',
    },
    subTitle: t('drivingSuccess.description'),
  };

  return (
    <Section>
      <Container className={styles.content}>
        <SectionHeader
          className={styles.sectionHeader}
          sectionName={headerInfo.sectionName}
          title={headerInfo.title}
          subTitle={headerInfo.subTitle}
        />
      </Container>
    </Section>
  );
};
