import React, { useState, useRef, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';

import { useFocusTrap } from '@/hooks/useFocusTrap';

import { MenuToggle } from '../menuToggle';

import styles from './MainNav.module.css';

interface NavItem {
  label: string;
  href: string;
}

export const MainNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  const items: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  // Trap focus when menu is open
  useFocusTrap(menuRef, isOpen);

  // Escape key closes menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen && toggleButtonRef.current) {
      toggleButtonRef.current.focus();
    }
  }, [isOpen]);

  return (
    <nav
      ref={menuRef}
      className={styles.nav}
      aria-label="Main navigation"
    >
      <div className={styles.mobileNav}>
        <MenuToggle
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>

      <ul className={styles.menuList}>
        {items.map(({ label, href }) => (
          <li key={href}>
            <NavLink
              to={href}
              className={({ isActive }) =>
                `${styles.menuLink} ${isActive ? styles.active : ''}`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {isOpen && (
          <ul className={styles.mobileList}>
            {items.map(({ label, href }) => (
              <li key={href}>
                <NavLink
                  to={href}
                  className={({ isActive }) =>
                    `${styles.menuLink} ${isActive ? styles.active : ''}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};
