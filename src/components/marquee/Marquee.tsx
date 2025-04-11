/* eslint-disable no-lonely-if */
import { useContext, useRef, useEffect, useState } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import { REDUCE_MOTION, WORK_ROUTE } from '@/config';
import { APP_ACTIONS, AppContext } from '@/store';
import { LogoItem } from '@/models';

import { IconPause, IconPlay } from '../svg';
import { SkipLink } from '../skipLink';
import mixins from '../../styles/mixins.module.css';

import styles from './Marquee.module.css';

interface MarqueeProps {
  logos: LogoItem[];
  speed?: number;
  gap?: number;
  direction?: 'left' | 'right';
  skipTo?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  logos,
  speed = 20,
  gap = 80,
  direction = 'left',
  skipTo
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const logoRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const [scrollWidth, setScrollWidth] = useState(0);
  const [totalWidth, setTotalWidth] = useState(0);
  const [x, setX] = useState(0);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [logoPositions, setLogoPositions] = useState<number[]>([]);
  const [isAnimating, setIsAnimating] = useState(true);

  const {
    dispatch,
    state: { animMarquee }
  } = useContext(AppContext);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const calculatePositions = () => {
      if (!track) return;

      let width = 0;
      logos.forEach(logo => {
        width += logo.width + gap;
      });
      setTotalWidth(width);
      setScrollWidth(width);

      const positions: number[] = [];
      let currentPosition = 0;

      logos.forEach(logo => {
        positions.push(currentPosition);
        currentPosition += logo.width + gap;
      });

      setLogoPositions(positions);
    };

    calculatePositions();

    const resizeObserver = new ResizeObserver(() => {
      calculatePositions();
    });

    resizeObserver.observe(track);

    return () => {
      if (track) {
        resizeObserver.unobserve(track);
      }
      resizeObserver.disconnect();
    };
  }, [logos, gap]);

  useEffect(() => {
    if (
      focusedIndex !== null &&
      wrapRef.current &&
      logoRefs.current[focusedIndex]
    ) {
      const wrap = wrapRef.current;
      const logoEl = logoRefs.current[focusedIndex];
      const wrapRect = wrap.getBoundingClientRect();
      const logoRect = logoEl.getBoundingClientRect();

      const logoCenter = logoRect.left + logoRect.width / 2;
      const wrapCenter = wrapRect.left + wrapRect.width / 2;

      const offset = logoCenter - wrapCenter;
      setIsAnimating(false);
      setX(prevX => prevX - offset);
    } else if (focusedIndex === null && !isHovered) {
      setIsAnimating(animMarquee);
    }

    return undefined;
  }, [focusedIndex, logoPositions, logos, animMarquee, isHovered]);

  useAnimationFrame((_, delta) => {
    if (REDUCE_MOTION) return;

    if (isAnimating && animMarquee && focusedIndex === null && !isHovered) {
      setX(prev => {
        if (direction === 'right') {
          const next = prev + (speed * delta) / 1000;
          if (next >= scrollWidth) {
            return 0;
          }
          return next;
        }

        const next = prev - (speed * delta) / 1000;
        if (next <= -scrollWidth) {
          return 0;
        }
        return next;
      });
    }
  });

  const handleLogoFocus = (index: number) => {
    setFocusedIndex(index);
  };

  const handleLogoBlur = () => {
    setFocusedIndex(null);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsAnimating(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (focusedIndex === null) {
      setIsAnimating(animMarquee);
    }
  };

  const renderLogoStrip = (keyPrefix: string, isInteractive: boolean = true) =>
    logos.map((logo, index) => (
      <div
        key={`${keyPrefix}-${index}`}
        className={styles.logoWrapper}
        role="listitem"
        style={{ marginRight: `${gap}px` }}
      >
        <NavLink
          ref={el => {
            if (isInteractive) logoRefs.current[index] = el;
          }}
          to={`${WORK_ROUTE}?tag=${logo.id}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            width: logo.width,
            height: logo.height
          }}
          onFocus={() => isInteractive && handleLogoFocus(index)}
          onBlur={() => isInteractive && handleLogoBlur()}
          onMouseEnter={() => isInteractive && handleMouseEnter()}
          onMouseLeave={() => isInteractive && handleMouseLeave()}
          tabIndex={isInteractive ? undefined : -1}
          aria-label={
            isInteractive ?
              `Click to view projects for ${logo.label}`
            : undefined
          }
          aria-hidden={!isInteractive}
        >
          <logo.SVG
            width="100%"
            height="100%"
          />
        </NavLink>
      </div>
    ));

  const getCloneStyles = () => {
    const wrapWidth = wrapRef.current?.clientWidth || 0;

    let leftCloneX = -totalWidth;
    let rightCloneX = totalWidth;

    if (direction === 'right') {
      if (x > totalWidth - wrapWidth) {
        leftCloneX = -totalWidth;
      } else if (x < 0) {
        rightCloneX = totalWidth;
      }
    } else {
      if (x > 0) {
        leftCloneX = -totalWidth;
      } else if (x < -(totalWidth - wrapWidth)) {
        rightCloneX = totalWidth;
      }
    }

    return {
      leftClone: {
        position: 'absolute' as const,
        left: 0,
        transform: `translateX(${leftCloneX}px)`
      },
      rightClone: {
        position: 'absolute' as const,
        left: 0,
        transform: `translateX(${rightCloneX}px)`
      }
    };
  };

  const cloneStyles = getCloneStyles();

  return (
    <>
      <SkipLink to={skipTo}>Skip brand marquee</SkipLink>

      <div
        className={`${styles.marqueeWrap} ${mixins.outerContainer}`}
        ref={wrapRef}
      >
        <div className={`${styles.marqueeWrapInner} ${mixins.innerContainer}`}>
          {/* Screen reader announcements */}
          <span
            className={mixins.visuallyHidden}
            aria-live="polite"
            aria-atomic="true"
          >
            {animMarquee ?
              'Marquee animation running'
            : 'Marquee animation paused'}
          </span>

          {!REDUCE_MOTION && (
            <button
              type="button"
              className={`${styles.marqueePauseBtn} ${mixins.touchTarget}`}
              onClick={() => dispatch({ type: APP_ACTIONS.MARQUEE_TOGGLE })}
              name={animMarquee ? 'pause' : 'resume'}
              aria-label={
                animMarquee ?
                  'Pause marquee animation'
                : 'Resume marquee animation'
              }
            >
              {animMarquee ?
                <IconPause />
              : <IconPlay />}
            </button>
          )}

          <div
            className={styles.marquee}
            role="list"
          >
            <motion.div
              className={styles.marqueeTrack}
              style={{ x }}
              ref={trackRef}
              initial={false}
              animate={{ x }}
              transition={
                focusedIndex !== null ?
                  { duration: 0.3, ease: 'easeOut' }
                : { duration: 0 }
              }
            >
              {/* Left clone - positioned to fill gap when main list is shifted right */}
              <motion.div
                className={styles.marqueeInner}
                style={cloneStyles.leftClone}
              >
                {renderLogoStrip('left', false)}
              </motion.div>

              {/* Main list - the only one with interactive elements */}
              <div className={styles.marqueeInner}>
                {renderLogoStrip('main', true)}
              </div>

              {/* Right clone - positioned to fill gap when main list is shifted left */}
              <motion.div
                className={styles.marqueeInner}
                style={cloneStyles.rightClone}
              >
                {renderLogoStrip('right', false)}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
