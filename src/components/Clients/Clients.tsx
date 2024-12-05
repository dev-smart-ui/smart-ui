'use client';

import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import styles from './clients.module.scss';
import duelmastersImg from './img/duelmasters.png';
import ecrImg from './img/ecr.png';
import houndDogImg from './img/houndDog.png';
import montessoriImg from './img/montessori.png';
import sanLorenzoImg from './img/sanLorenzo.png';
import tigerImg from './img/tiger.png';
import unImg from './img/un.png';
import wsImg from './img/ws.png';

const CLIENTS_LOGO = [
  { key: 'montessori', image: montessoriImg },
  { key: 'houndDOg', image: houndDogImg },
  { key: 'unImg', image: unImg },
  { key: 'sanLorenzo', image: sanLorenzoImg },
  { key: 'duelmasters', image: duelmastersImg },
  { key: 'duelmaster2', image: duelmastersImg },
  { key: 'duelmaster3', image: duelmastersImg },
  { key: 'ecr', image: ecrImg },
  { key: 'tiger', image: tigerImg },
  { key: 'wsImg', image: wsImg },
];

export const Clients: FC = () => {
  const { t } = useTranslation('home');

  return (
    <Section className={styles.section}>
      <Container className={styles.additionalContentWrapper}>
        <Container className={styles.content}>
          <SectionHeader sectionName={t('clients.sectionName')} />
          <Swiper
            loop
            allowTouchMove={false}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            speed={1000}
            loopAdditionalSlides={2}
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            initialSlide={1}
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1440: {
                slidesPerView: 6,
              },
            }}
            className={styles.logosSwiper}
            id="clientSlider"
          >
            {CLIENTS_LOGO.map(({ image, key }) => (
              <SwiperSlide key={key}>
                <div className={styles.image}>
                  <Image src={image} alt={key} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Container>
    </Section>
  );
};
