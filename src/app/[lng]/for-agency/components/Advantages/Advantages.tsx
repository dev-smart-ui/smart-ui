'use client';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from '@components/Container';
import { InfoCards } from '@components/InfoCards';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import { Solutions } from './Solutions';
import styles from './advantages.module.scss';

const infoCards = [
  { count: '250+', label: 'infoCards.card1.label' },
  { count: '117+', label: 'infoCards.card2.label' },
];

export const Advantages: FC = () => {
  const { t } = useTranslation(['forAgency', 'common']);

  const headerInfo = {
    sectionName: t('advantages.headerInfo.sectionName'),
    title: t('advantages.headerInfo.title'),
    subTitle: t('advantages.headerInfo.description'),
  };

  return (
    <Section>
      <Container className={styles.content}>
        <div className={styles.advantages}>
          <SectionHeader
            className={styles.sectionHeader}
            sectionName={headerInfo.sectionName}
            title={headerInfo.title}
            subTitle={headerInfo.subTitle}
          />
          <InfoCards t={t} data={infoCards} className={styles.infoCards} />
        </div>
        <Solutions t={t} />
      </Container>
    </Section>
  );
};
