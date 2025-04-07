import { useEffect } from 'react';

export const useFocusTrap = (
  containerRef: React.RefObject<HTMLElement | null>,
  isActive: boolean
) => {
  useEffect(() => {
    if (!isActive || !containerRef.current) return undefined;

    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ];

    const container = containerRef.current;
    const focusableElements = container.querySelectorAll<HTMLElement>(
      focusableSelectors.join(',')
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    firstElement?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActive, containerRef]);
};
