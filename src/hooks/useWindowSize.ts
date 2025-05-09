import { useState, useEffect, useCallback } from 'react';

import { BREAKPOINT_DESKTOP } from '@/config';

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height
  };
};

export const useWindowSize = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const handleResize = useCallback(() => {
    setWindowDimensions(getWindowDimensions());
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const isMobile = windowDimensions.width < BREAKPOINT_DESKTOP;
  const isDesktop = !isMobile;

  const viewport = (() => {
    switch (true) {
      case isMobile:
        return 'mobile';
      case isDesktop:
        return 'desktop';
      default:
        return 'desktop';
    }
  })();

  return {
    ...windowDimensions,
    isMobile,
    isDesktop,
    viewport
  };
};

export default useWindowSize;
