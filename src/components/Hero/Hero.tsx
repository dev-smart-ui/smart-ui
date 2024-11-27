'use client';

import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from '@components/Container';
import { Section } from '@components/Section';

import { Content } from './Content';
import { Navigation } from './Navigation';
import { Trust } from './Trust';
import styles from './hero.module.scss';
import bgImage from './img/heroBg.png';

interface HeroProps {
  page?: 'home' | 'wordpressService';
  image?: StaticImageData;
  bottomBgImage?: StaticImageData;
}

export const Hero: FC<HeroProps> = ({
  page = 'home',
  image,
  bottomBgImage,
}) => {
  const { t } = useTranslation([page, 'common']);
  const isHomePage = page === 'home';

  return (
    <Section
      className={classNames(styles.heroSection, {
        [styles.isNoHomePage]: !isHomePage,
      })}
    >
      <Container
        className={classNames(styles.content, {
          [styles.isNoHomePage]: !isHomePage,
        })}
      >
        <div className={styles.contentWrapper}>
          {isHomePage && <Trust description={t('hero.trust')} />}
          <Content t={t} />
          <Navigation t={t} isHomePage={isHomePage} />
        </div>
        {!isHomePage && !!image && (
          <div className={styles.allPageImage}>
            <Image src={image} alt="backgroundImage" />
          </div>
        )}
        {isHomePage && (
          <div className={styles.homePageImage}>
            <Image src={bgImage} alt="backgroundImage" />
          </div>
        )}
      </Container>
      {!isHomePage && !!bottomBgImage && (
        <div
          className={classNames(styles.bottomBgImage, styles[`${page}Section`])}
        >
          <Image src={bottomBgImage} alt="bgImage" />
        </div>
      )}
    </Section>
  );
};
