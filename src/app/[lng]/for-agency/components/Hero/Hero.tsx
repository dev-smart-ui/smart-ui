'use client';

import { IHeroForAgency } from '@app-types/interfaces';
import Image from 'next/image';

import { FC } from 'react';

import { Button } from '@components/Button';
import { Container } from '@components/Container';
import { Section } from '@components/Section';

import styles from './hero.module.scss';

interface IHeroProps {
  data: IHeroForAgency;
}

export const Hero: FC<IHeroProps> = ({ data }) => {
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <div className={styles.imageWrapper}>
            <div className={styles.image}>
              <Image
                src={data?.smallImage?.data?.attributes?.url}
                width={112}
                height={40}
                alt="avatars"
              />
            </div>
            <span>{data?.topSmallText}</span>
          </div>
          <h1 className={styles.title}>{data?.title}</h1>
          <p className={styles.descriprion}>{data?.description}</p>
          <Button text={data?.button?.label} />
        </div>
        <Image
          src={data?.image?.data?.attributes?.url}
          width={1240}
          height={560}
          alt="agencyImage"
        />
      </Container>
    </Section>
  );
};
