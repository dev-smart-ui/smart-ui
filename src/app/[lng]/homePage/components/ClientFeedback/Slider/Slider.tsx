import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';

import { useEffect, useRef, useState } from 'react';

import { Card } from './Card';
import styles from './slider.module.scss';
import { feedbacks } from './sliderData';

export const Slider = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  useEffect(() => {
    if (!swiperRef.current) {
      return undefined;
    }

    const swiper = swiperRef.current;

    const updateActiveSlides = () => {
      const slidesPerView = swiper.params.slidesPerView as number;
      const indexes = Array.from(
        { length: slidesPerView },
        (_, i) => swiper.activeIndex + i,
      ).filter((index) => index >= 0 && index < swiper.slides.length);

      setActiveIndexes(indexes);
    };

    swiper.on('slideChange', updateActiveSlides);

    const handleResize = () => {
      swiper.update();
      updateActiveSlides();
    };
    window.addEventListener('resize', handleResize);

    updateActiveSlides();

    return () => {
      swiper.off('slideChange', updateActiveSlides);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
        // centeredSlides={true}
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
          <div className={styles.slideWrapper}>
            <SwiperSlide
              key={feedback.id}
              className={`${styles.slide} ${activeIndexes.includes(index) ? styles.isActive : ''}`}
            >
              <Card {...feedback} />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};
