import { Swiper } from 'swiper/types';

import { MouseEvent, RefObject } from 'react';

export const useSwiperInteraction = (
  isDesktop: boolean,
  swiperRef: RefObject<Swiper>,
) => {
  const handleMouseEnter = (event: MouseEvent<HTMLElement>) => {
    if (!isDesktop) return;

    if (swiperRef.current) {
      swiperRef.current.autoplay.stop();
    }

    const target = event.currentTarget as HTMLElement;
    const swiperWrapper = document.querySelector('.swiper') as HTMLElement;

    if (swiperWrapper) {
      if (target.classList.contains('swiper-slide-active')) {
        swiperWrapper.style.transform = 'translateX(-100px)';
      } else if (target.classList.contains('swiper-slide-next')) {
        swiperWrapper.style.transform = 'translateX(-200px)';
      } else if (target.classList.contains('swiper-slide-prev')) {
        swiperWrapper.style.transform = 'translateX(0px)';
      }
    }
  };

  const handleMouseLeave = () => {
    const swiperWrapper = document.querySelector('.swiper') as HTMLElement;

    if (swiperWrapper) {
      if (swiperRef.current) {
        swiperRef.current.autoplay.start();
      }
      swiperWrapper.style.transform = 'translateX(0)';
    }
  };

  return {
    handleMouseEnter,
    handleMouseLeave,
  };
};
