import { Swiper as SwiperClass } from 'swiper/types';

import { MouseEvent, useEffect, useRef, useState } from 'react';

export const useSwiperInteraction = (isDesktop: boolean) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  useEffect(() => {
    if (!swiperRef.current) return undefined;

    const swiper = swiperRef.current;

    const updateActiveSlides = () => {
      const indexes = [
        swiper.activeIndex - 1,
        swiper.activeIndex,
        swiper.activeIndex + 1,
      ].filter((index) => index >= 0 && index < swiper.slides.length);

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
    swiperRef,
    activeIndexes,
    handleMouseEnter,
    handleMouseLeave,
  };
};
