'use client';

import { PageEnum } from '@app-types/enums';
import Image from 'next/image';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@components/Button';
import { Container } from '@components/Container';
import { Section } from '@components/Section';

import agencyImg from '../img/agencyImg.png';
import avatarsImg from '../img/avatars.png';
import styles from './hero.module.scss';

interface IHeroProps {
  page?: string;
}

export const Hero: FC<IHeroProps> = ({ page = PageEnum.ForAgency }) => {
  const { t } = useTranslation([page, 'common']);

  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <div className={styles.imageWrapper}>
            <div className={styles.image}>
              <Image src={avatarsImg} alt="avatars" />
            </div>
            <span>Trusted by 1,500+ agencies</span>
          </div>
          <h1 className={styles.title}>Streamline Your Agency’s </h1>
          <p className={styles.descriprion}>
            Empower your agency to operate efficiently, meet client
            expectations, and scale with ease. By optimizing processes,
            leveraging expert talent, and utilizing agency-specific tools, you
            can focus on growing your business while delivering exceptional
            results
          </p>
          <Button text={t('buttons.requestQuote', { ns: 'common' })} />
        </div>
        <Image src={agencyImg} alt="agencyImage" />
      </Container>
    </Section>
  );
};
