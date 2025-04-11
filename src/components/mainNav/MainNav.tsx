import React, { useState, useRef, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';

import { useFocusTrap } from '@/hooks';
import {
  // HOME_ROUTE,
  routes
} from '@/config';
// import { about } from '@/content';
// import { nathan } from '@/assets';
// import { ResponsiveImage } from '../responsiveImage';

import { MenuToggle } from '../menuToggle';
import mixins from '../../styles/mixins.module.css';

import styles from './MainNav.module.css';

export const MainNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

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
    <div className={`${styles.navContainer} ${mixins.outerContainer}`}>
      <nav
        className={`${styles.nav} ${mixins.innerContainer}`}
        aria-label="Main navigation"
      >
        {/* <div>
        {location.pathname !== HOME_ROUTE && (
          <NavLink
            to={HOME_ROUTE}
            className={`${styles.siteTitle} ${mixins.touchTarget}`}
            aria-label="Homepage"
          >
            <span
              className={styles.siteTitleImg}
              aria-hidden
            >
              <ResponsiveImage img={nathan} />
            </span>
            <span className={styles.siteTitleText}>{about.title}</span>
          </NavLink>
        )}
      </div> */}

        <ul className={styles.menuList}>
          {routes.map(({ key, path, menuLabel, excludeFromNav }) => {
            if (excludeFromNav) return null;

            return (
              <li key={`menuItem_${key}`}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `${styles.menuLink} ${isActive ? styles.active : ''}`
                  }
                >
                  {menuLabel}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <div
          ref={menuRef}
          className={styles.mobileNavWrap}
        >
          <div className={`${styles.mobileNav} ${mixins.innerContainer}`}>
            <MenuToggle
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              buttonRef={toggleButtonRef}
            />
          </div>

          <div
            id="mobile-menu"
            className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {isOpen && (
              <ul className={styles.mobileList}>
                {routes.map(({ key, path, menuLabel, excludeFromNav }) => {
                  if (excludeFromNav) return null;

                  return (
                    <li key={`menuItem_mob_${key}`}>
                      <NavLink
                        to={path}
                        className={({ isActive }) =>
                          `${styles.menuLink} ${mixins.touchTarget} ${isActive ? styles.active : ''}`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        {menuLabel}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
