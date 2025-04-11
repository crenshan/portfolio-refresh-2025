import mixins from '../../styles/mixins.module.css';

import styles from './SkipLink.module.css';

interface SkipLinkProps {
  to?: string; // CSS selector like '#main' or '.content'
  children: React.ReactNode;
}

export const SkipLink: React.FC<SkipLinkProps> = ({
  to = '#content',
  children
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector<HTMLElement>(to);

    if (target) {
      if (!target.hasAttribute('tabindex')) {
        target.setAttribute('tabindex', '-1');
      }
      target.focus({ preventScroll: true });
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn(`SkipLink target "${to}" not found.`);
    }
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={`${styles.skipLink} ${mixins.visuallyHidden}`}
    >
      {children}
    </a>
  );
};
