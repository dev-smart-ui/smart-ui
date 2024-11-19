import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import useMediaQuery from '@hooks/useMediaQuery';

import { useSwiperInteraction } from '../../../hooks/useSwiperInteraction';
import { Card } from './Card';
import styles from './slider.module.scss';
import { feedbacks } from './sliderData';

export const Slider = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const { swiperRef, activeIndexes, handleMouseEnter, handleMouseLeave } =
    useSwiperInteraction(isDesktop);

  return (
    <div className={styles.wrapper}>
      <Swiper
        centeredSlides
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1}
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
            initialSlide: 1,
          },
        }}
        className={styles.swiper}
      >
        {feedbacks.map((feedback, index) => (
          <SwiperSlide
            key={feedback.id}
            className={`${styles.slide} ${activeIndexes.includes(index) ? styles.isActive : ''}`}
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
