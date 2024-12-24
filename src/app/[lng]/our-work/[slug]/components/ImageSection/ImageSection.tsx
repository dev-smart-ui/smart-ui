'use client';

import { IWithImages } from '@app-types/interfaces';
import Image from 'next/image';

import { FC } from 'react';

import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { TextGradientBackground } from '@components/TextGradientBackgraund';

import styles from './imageSection.module.scss';

interface ImageSectionProps {
  data: IWithImages;
}

export const ImageSection: FC<ImageSectionProps> = ({ data }) => {
  return (
    <Section>
      <Container className={styles.wrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}>{data?.title}</h2>
          {data?.sectionName && (
            <TextGradientBackground className={styles.sectionName}>
              {data?.sectionName}
            </TextGradientBackground>
          )}
        </div>
        <div className={styles.images}>
          {data?.images?.data?.map((image) => (
            <div key={image?.id} className={styles.image}>
              <Image
                src={image?.attributes?.url}
                width={1260}
                height={600}
                alt="image"
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
