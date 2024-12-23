import { IClientFeedback } from '@app-types/interfaces';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';

import { FC, useRef } from 'react';

import useMediaQuery from '@hooks/useMediaQuery';

import { useSwiperInteraction } from '../hooks/useSwiperInteraction';
import { Card } from './Card';
import styles from './slider.module.scss';

interface SliderProps {
  data: IClientFeedback[];
}

export const Slider: FC<SliderProps> = ({ data }) => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const swiperRef = useRef<SwiperType | null>(null);
  const { handleMouseEnter, handleMouseLeave } = useSwiperInteraction(
    isDesktop,
    swiperRef,
  );

  return (
    <div className={styles.wrapper}>
      <Swiper
        loop
        centeredSlides
        allowTouchMove={false}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={1000}
        loopAdditionalSlides={2}
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        navigation={{
          prevEl: '#prevButton',
          nextEl: '#nextButton',
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className={styles.feedbackSwiper}
        id="feedbackSwiper"
      >
        {data.map((feedback) => (
          <SwiperSlide
            key={feedback.id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Card {...feedback} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
