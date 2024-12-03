'use client';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import styles from './drivingSuccess.module.scss';

export const DrivingSuccess: FC = () => {
  const { t } = useTranslation('aboutUs');

  const headerInfo = {
    title: {
      main: t('drivingSuccess.title.main'),
      highlighted: t('drivingSuccess.title.highlighted'),
    },
    subtitle: t('drivingSuccess.description'),
  };

  return (
    <Section>
      <Container className={styles.content}>
        <SectionHeader
          className={styles.sectionHeader}
          sectionName={t('drivingSuccess.sectionName')}
          title={headerInfo.title}
          subTitle={headerInfo.subtitle}
          color="Third"
        />
      </Container>
    </Section>
  );
};
