'use client';

import { PageEnum } from '@app-types/enums';
import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from '@components/Container';
import { InfoCards } from '@components/Hero/InfoCards';
import { Section } from '@components/Section';

import { Content } from './Content';
import { Navigation } from './Navigation';
import { Trust } from './Trust';
import styles from './hero.module.scss';
import bgImage from './img/heroBg.png';

interface HeroProps {
  page?: string;
  image?: StaticImageData;
  bottomBgImage?: StaticImageData;
  colorGradiant?: 'Primary' | 'Secondary' | 'Third';
}

export const Hero: FC<HeroProps> = ({
  page = PageEnum.Home,
  image,
  bottomBgImage,
  colorGradiant,
}) => {
  const { t } = useTranslation([page, 'common']);
  const isHomePage = page === PageEnum.Home;
  const isAboutUsPage = page === PageEnum.AboutUs;

  return (
    <Section className={styles.heroSection}>
      <Container
        className={classNames(styles.content, {
          [styles.isNoHomePage]: !isHomePage,
        })}
      >
        <div className={styles.contentWrapper}>
          {isHomePage && <Trust description={t('hero.trust')} />}
          <Content colorGradiant={colorGradiant} t={t} />
          {isAboutUsPage ? (
            <InfoCards t={t} />
          ) : (
            <Navigation t={t} isHomePage={isHomePage} />
          )}
        </div>
        {!isHomePage && !!image && (
          <div
            className={classNames(styles.allPageImage, {
              [styles.isAboutUsPage]: isAboutUsPage,
            })}
          >
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
          className={classNames(styles.bottomBgImage, styles[`${page}Page`])}
        >
          <Image src={bottomBgImage} alt="bgImage" />
        </div>
      )}
    </Section>
  );
};
