'use client';

import { PageEnum } from '@app-types/enums';
import { IHeroData } from '@app-types/interfaces';
import classNames from 'classnames';
import Image from 'next/image';

import { FC } from 'react';

import { Container } from '@components/Container';
import { InfoCards } from '@components/InfoCards';
import { Section } from '@components/Section';

import { Content } from './Content';
import { Navigation } from './Navigation';
import { Trust } from './Trust';
import styles from './hero.module.scss';

interface HeroProps {
  page?: string;
  data?: IHeroData;
}

export const Hero: FC<HeroProps> = ({ page = PageEnum.Home, data }) => {
  const isHomePage = page === PageEnum.Home;
  const isAboutUsPage = page === PageEnum.AboutUs;

  return (
    <Section
      className={classNames(styles.heroSection, {
        [styles.isAboutUsPage]: isAboutUsPage,
      })}
    >
      <Container
        className={classNames(styles.content, {
          [styles.isNoHomePage]: !isHomePage,
        })}
      >
        <div className={styles.contentWrapper}>
          {isHomePage && <Trust description={data?.trust} />}
          <Content data={data} />
          {isAboutUsPage && data?.cards ? (
            <InfoCards data={data?.cards} />
          ) : (
            <Navigation isHomePage={isHomePage} data={data} />
          )}
        </div>
        {!isHomePage && data?.image && (
          <div
            className={classNames(styles.allPageImage, {
              [styles.isAboutUsPage]: isAboutUsPage,
            })}
          >
            <Image
              width={900}
              height={680}
              src={data?.image?.data?.attributes?.url}
              alt="heroImage"
            />
          </div>
        )}
        {isHomePage && data?.backgroundImage && (
          <div className={styles.homePageImage}>
            <Image
              width={900}
              height={680}
              src={data?.backgroundImage?.data?.attributes?.url}
              alt="backgroundImage"
            />
          </div>
        )}
      </Container>
      {!isHomePage && !!data?.backgroundBottomImage && (
        <div
          className={classNames(styles.bottomBgImage, styles[`${page}Page`])}
        >
          <Image
            width={1920}
            height={300}
            src={data?.backgroundBottomImage?.data?.attributes?.url}
            alt="bgImage"
          />
        </div>
      )}
    </Section>
  );
};
