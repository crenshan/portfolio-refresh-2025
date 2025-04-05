import { useEffect, useState } from 'react';

/**
 * @param ref - React.RefObject<HTMLElement>
 * @param threshold - number (0-1) - represents percentage of element required to be in view
 * @returns boolean
 */
export const useInView = (
  ref: React.RefObject<HTMLElement>,
  threshold = 0
): boolean => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const refEl = ref.current;
    if (!refEl) return undefined;

    const observerCallback: IntersectionObserverCallback = entries => {
      if (entries.length > 0) {
        setIsInView(entries[0].isIntersecting);
      }
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (refEl) observer.unobserve(refEl);
    };
  }, [ref, threshold]);

  return isInView;
};
