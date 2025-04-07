import styles from './MenuToggle.module.css';

export const MenuToggle = ({
  isOpen,
  setIsOpen
}: {
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleToggle = () => {
    if (setIsOpen) setIsOpen(!isOpen);
  };

  return (
    <button
      type="button"
      className={`${styles.menuToggle} ${isOpen ? styles.open : ''}`}
      onClick={handleToggle}
      aria-label={isOpen ? 'Click to close menu' : 'Click to open menu'}
    >
      <span
        className={`${styles.menuToggleIcon} ${isOpen ? styles.open : ''}`}
        aria-hidden="true"
      />
    </button>
  );
};
