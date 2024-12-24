'use client';

import { usePathname } from 'next/navigation';

import { useEffect, useLayoutEffect, useState } from 'react';

const useBackButton = () => {
  const [isPop, setIsPop] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setIsPop(true);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    setIsPop(false);
  }, [usePathname()]);

  return isPop;
};

const useScrollToTop = () => {
  const pathname = usePathname();
  const isPop = useBackButton();

  const scrollToTop = () => window.scrollTo({ top: 0 });

  const [isRefresh, setIsRefresh] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = () => {
      setIsRefresh(true);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useLayoutEffect(() => {
    if (isPop || (!isRefresh && pathname === window.location.pathname)) {
      setTimeout(scrollToTop, 0);
    }
    setIsRefresh(false);
  }, [pathname, isPop]);
};

export default useScrollToTop;
