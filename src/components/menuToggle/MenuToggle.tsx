import mixins from '../../styles/mixins.module.css';

import styles from './MenuToggle.module.css';

export const MenuToggle = ({
  isOpen,
  setIsOpen,
  buttonRef
}: {
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  buttonRef?: React.RefObject<HTMLButtonElement | null>;
}) => {
  const handleToggle = () => {
    if (setIsOpen) setIsOpen(!isOpen);
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      className={`${styles.menuToggle} ${mixins.touchTarget} ${isOpen ? styles.open : ''}`}
      onClick={handleToggle}
      aria-label={isOpen ? 'Click to close menu' : 'Click to open menu'}
      aria-controls="mobile-menu"
      aria-expanded={isOpen}
    >
      <span
        className={`${styles.menuToggleIcon} ${isOpen ? styles.open : ''}`}
        aria-hidden="true"
      />
    </button>
  );
};
