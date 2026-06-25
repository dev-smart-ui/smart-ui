import { IClientFeedback } from '@app-types/interfaces';
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';

import { FC, useRef } from 'react';

import { Card } from './Card';
import styles from './slider.module.scss';

interface SliderProps {
  data: IClientFeedback[];
}

export const Slider: FC<SliderProps> = ({ data }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  // Duplicate slides for seamless infinite scroll
  const slides = [...data, ...data, ...data];

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={() => swiperRef.current?.autoplay.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay.start()}
    >
      <Swiper
        loop
        freeMode={{ enabled: true, momentum: false }}
        allowTouchMove={false}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={4000}
        modules={[Navigation, Autoplay, FreeMode]}
        spaceBetween={24}
        slidesPerView={1.2}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        navigation={{
          prevEl: '#prevButton',
          nextEl: '#nextButton',
        }}
        breakpoints={{
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.1 },
        }}
        className={styles.feedbackSwiper}
        id="feedbackSwiper"
      >
        {slides.map((feedback, index) => (
          <SwiperSlide key={`${feedback.id}-${index}`}>
            <Card {...feedback} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
