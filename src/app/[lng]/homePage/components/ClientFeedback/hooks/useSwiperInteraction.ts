import { MouseEvent } from 'react';

export const useSwiperInteraction = (isDesktop: boolean) => {
  const handleMouseEnter = (event: MouseEvent<HTMLElement>) => {
    if (!isDesktop) return;

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
      swiperWrapper.style.transform = 'translateX(0)';
    }
  };

  return {
    handleMouseEnter,
    handleMouseLeave,
  };
};