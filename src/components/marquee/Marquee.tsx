/* eslint-disable no-lonely-if */
import { useContext, useRef, useEffect, useState } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';

import { REDUCE_MOTION } from '@/config';
import { APP_ACTIONS, AppContext } from '@/store';
import { LogoItem } from '@/models';

import { IconPause, IconPlay } from '../svg';
import { SkipLink } from '../skipLink';

import styles from './Marquee.module.css';

interface MarqueeProps {
  logos: LogoItem[];
  speed?: number;
  gap?: number;
  direction?: 'left' | 'right';
}

export const Marquee: React.FC<MarqueeProps> = ({
  logos,
  speed = 20,
  gap = 80,
  direction = 'left'
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
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

  // Calculate logo positions and set up resize observer
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const calculatePositions = () => {
      if (!track) return;

      // Calculate the total width of all logos
      let width = 0;
      logos.forEach(logo => {
        width += logo.width + gap;
      });
      setTotalWidth(width);
      setScrollWidth(width);

      // Calculate the absolute position of each logo
      const positions: number[] = [];
      let currentPosition = 0;

      logos.forEach(logo => {
        positions.push(currentPosition);
        currentPosition += logo.width + gap;
      });

      setLogoPositions(positions);
    };

    calculatePositions();

    // Set up resize observer to recalculate when window size changes
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

  // Smooth transition to centered position when focus changes
  useEffect(() => {
    if (
      focusedIndex !== null &&
      wrapRef.current &&
      logoPositions.length > focusedIndex
    ) {
      const wrapWidth = wrapRef.current.clientWidth;
      const logoPosition = logoPositions[focusedIndex];
      const logoWidth = logos[focusedIndex].width;

      // Calculate the position that would center the logo
      const centeredPosition = -(logoPosition - wrapWidth / 2 + logoWidth / 2);

      // Pause animation when an item is focused
      setIsAnimating(false);

      // Apply the centered position with smooth transition
      setX(centeredPosition);

      // No timeout to resume animation - remain paused while focused
    } else if (focusedIndex === null && !isHovered) {
      // Only resume animation when both focus is lost AND not hovered
      setIsAnimating(animMarquee);
    }

    return undefined;
  }, [focusedIndex, logoPositions, logos, animMarquee, isHovered]);

  // Handle the actual animation
  useAnimationFrame((_, delta) => {
    if (REDUCE_MOTION) return;

    // Only animate when:
    // 1. Animation is enabled (isAnimating)
    // 2. Marquee is set to animate (animMarquee)
    // 3. No item is focused (focusedIndex === null)
    // 4. Mouse is not hovering over an item (isHovered === false)
    if (isAnimating && animMarquee && focusedIndex === null && !isHovered) {
      // Normal scrolling animation when not focused/hovered
      setX(prev => {
        // For left-to-right movement (reversed)
        if (direction === 'right') {
          const next = prev + (speed * delta) / 1000;
          // Reset position when we've scrolled through the entire width
          if (next >= scrollWidth) {
            return 0;
          }
          return next;
        }

        // For right-to-left movement
        const next = prev - (speed * delta) / 1000;
        // Reset position when we've scrolled through the entire width
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
    // Only resume animation if no item is focused
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
        <a
          href={logo.href}
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
        </a>
      </div>
    ));

  // Calculate which clones should be visible based on current scroll position
  const getCloneStyles = () => {
    // Get the wrapper width if available
    const wrapWidth = wrapRef.current?.clientWidth || 0;

    // Default positions for clones
    let leftCloneX = -totalWidth;
    let rightCloneX = totalWidth;

    if (direction === 'right') {
      // right-to-left scroll
      if (x > totalWidth - wrapWidth) {
        // Main list is shifted far right showing gap at left
        // Left clone should be visible
        leftCloneX = -totalWidth;
      } else if (x < 0) {
        // Main list is shifted to the left showing gap at right
        // Need to position right clone to fill this gap
        rightCloneX = totalWidth;
      }
    } else {
      // left-to-right scroll
      if (x > 0) {
        // Main list is shifted to the right showing gap at left
        // Need to position left clone to fill this gap
        leftCloneX = -totalWidth;
      } else if (x < -(totalWidth - wrapWidth)) {
        // Main list is shifted far left showing gap at right
        // Right clone should be visible
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
      <SkipLink>Skip brand marquee</SkipLink>

      <div
        className={styles.marqueeWrap}
        ref={wrapRef}
      >
        <div className={styles.marqueeWrapInner}>
          {/* Screen reader announcements */}
          <span
            className={styles.marqueeAnnouncement}
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
              className={styles.marqueePauseBtn}
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
