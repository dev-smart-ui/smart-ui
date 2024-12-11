'use client';

import { IClientsSection } from '@app-types/interfaces';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FC } from 'react';

import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import styles from './clients.module.scss';

interface ClientsProps {
  data: IClientsSection;
}

export const Clients: FC<ClientsProps> = ({ data }) => {
  return (
    <Section className={styles.section}>
      <Container className={styles.additionalContentWrapper}>
        <Container className={styles.content}>
          <SectionHeader sectionName={data?.sectionName} />
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
            {data?.clients?.map(({ image, key }) => (
              <SwiperSlide key={key}>
                <div className={styles.image}>
                  <Image
                    width={200}
                    height={50}
                    src={image?.data?.attributes?.url}
                    alt={key}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Container>
    </Section>
  );
};
