import { useEffect } from 'react';

export const useResetStatesOnResize = (resetFunctions: (() => void)[]) => {
  useEffect(() => {
    const handleResize = () => {
      resetFunctions.forEach((resetFn) => resetFn());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [resetFunctions]);
};
