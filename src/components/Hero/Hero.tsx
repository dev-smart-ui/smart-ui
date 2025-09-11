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
  const isProjectPage = page === PageEnum.ProjectDetail;
  return (
    <Section
      className={classNames(styles.heroSection, {
        [styles.isAboutUsPage]: isAboutUsPage,
        [styles.isHomePage]: isHomePage,
      })}
    >
      <Container
        className={classNames(styles.content, {
          [styles.isNoHomePage]: !isHomePage,
        })}
      >
        <div className={styles.contentWrapper}>
          {data?.trust && <Trust description={data?.trust} />}
          <Content data={data} />
          {isAboutUsPage && data?.cards ? (
            <InfoCards data={data?.cards} />
          ) : (
            <Navigation isHomePage={isHomePage} data={data} />
          )}
        </div>
        {data?.image?.data?.attributes?.url && (
          <div
            className={classNames(styles.allPageImage, {
              [styles.isAboutUsPage]: isAboutUsPage,
              [styles.isProjectPage]: isProjectPage,
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
        {data?.backgroundImage?.data?.attributes?.url && (
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
      {data?.backgroundBottomImage?.data?.attributes?.url && (
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
      {data?.topBgImage?.data?.attributes?.url && (
        <div className={styles.topBgImage}>
          <Image
            width={1920}
            height={300}
            src={data?.topBgImage?.data?.attributes?.url}
            alt="bgImage"
          />
        </div>
      )}
    </Section>
  );
};
