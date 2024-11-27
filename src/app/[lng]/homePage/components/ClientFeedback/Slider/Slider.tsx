import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FC } from 'react';

import useMediaQuery from '@hooks/useMediaQuery';

import { useLocaleFeedbacksData } from '../hooks/useLocaleFeedbacksData';
import { useSwiperInteraction } from '../hooks/useSwiperInteraction';
import { Card } from './Card';
import styles from './slider.module.scss';

interface SliderProps {
  t: (key: string) => string;
}

export const Slider: FC<SliderProps> = ({ t }) => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const { feedbacks } = useLocaleFeedbacksData(t);
  const { handleMouseEnter, handleMouseLeave } =
    useSwiperInteraction(isDesktop);

  return (
    <div className={styles.wrapper}>
      <Swiper
        loop
        loopAdditionalSlides={2}
        centeredSlides
        modules={[Navigation]}
        spaceBetween={20}
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
          },
        }}
        className={styles.swiper}
      >
        {feedbacks.map((feedback) => (
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
