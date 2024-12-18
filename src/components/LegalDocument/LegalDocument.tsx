'use client';

import { ILegalDocument } from '@app-types/interfaces';
import Image from 'next/image';

import { FC } from 'react';

import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import { Content } from './Content';
import { Nav } from './Nav';
import styles from './legalDocument.module.scss';

export interface LegalDocumentProps {
  data: ILegalDocument;
}

export const LegalDocument: FC<LegalDocumentProps> = ({ data }) => {
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.topImage}>
          <Image
            src={data?.topImage?.data?.attributes?.url}
            width={820}
            height={400}
            alt="bgImage"
          />
        </div>
        <SectionHeader title={data?.title} description={data?.description} />
        <div className={styles.wrapper}>
          <Nav data={data?.navigation} />
          <Content data={data?.content} />
        </div>
      </Container>
    </Section>
  );
};
