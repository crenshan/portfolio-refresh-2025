/* eslint-disable no-lonely-if */
import { useContext, useRef, useEffect, useState } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';

import { REDUCE_MOTION } from '@/config';
import { APP_ACTIONS, AppContext } from '@/store';

import { IconPause } from '../svg/IconPause';
import { IconPlay } from '../svg/IconPlay';

import styles from './Marquee.module.css';

type LogoItem = {
  href: string;
  SVG: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  width: number;
};

interface MarqueeProps {
  logos?: LogoItem[];
  speed?: number;
  gap?: number;
  backgroundColor?: string;
  color?: string;
  direction?: 'left' | 'right';
}

const SampleSVG: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  const { fill } = props;

  return (
    <svg
      viewBox="0 0 100 50"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        width="100"
        height="50"
        rx="8"
        fill={fill || '#FFD700'}
      />
      <text
        x="50"
        y="30"
        textAnchor="middle"
        fill="#000"
        fontSize="14"
        fontWeight="bold"
      >
        Logo
      </text>
    </svg>
  );
};

const sampleLogos: LogoItem[] = [
  { href: 'https://example.com/1', SVG: SampleSVG, width: 120 },
  { href: 'https://example.com/2', SVG: SampleSVG, width: 150 },
  { href: 'https://example.com/3', SVG: SampleSVG, width: 100 },
  { href: 'https://example.com/4', SVG: SampleSVG, width: 180 },
  { href: 'https://example.com/5', SVG: SampleSVG, width: 130 },
  { href: 'https://example.com/6', SVG: SampleSVG, width: 140 },
  { href: 'https://example.com/7', SVG: SampleSVG, width: 160 },
  { href: 'https://example.com/8', SVG: SampleSVG, width: 110 },
  { href: 'https://example.com/9', SVG: SampleSVG, width: 170 },
  { href: 'https://example.com/10', SVG: SampleSVG, width: 125 }
];

export const Marquee: React.FC<MarqueeProps> = ({
  logos = sampleLogos,
  speed = 30,
  gap = 40,
  backgroundColor = 'transparent',
  color = '#FFD700',
  direction = 'right' // Default to right-to-left, reversed from original
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [totalWidth, setTotalWidth] = useState(0);
  const [x, setX] = useState(0);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [isHoveredOrFocused, setIsHoveredOrFocused] = useState(false);
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

      // Temporarily pause animation while focusing
      setIsAnimating(false);

      // Apply the centered position with smooth transition
      setX(centeredPosition);

      // Resume animation if marquee was active when user focused
      if (animMarquee) {
        const timer = setTimeout(() => {
          setIsAnimating(true);
        }, 300); // Resume after transition

        return () => clearTimeout(timer);
      }
    } else if (focusedIndex === null) {
      // Resume animation when focus is lost
      setIsAnimating(animMarquee);
    }

    return undefined;
  }, [focusedIndex, logoPositions, logos, animMarquee]);

  // Handle the actual animation
  useAnimationFrame((_, delta) => {
    if (REDUCE_MOTION) return;

    if (isAnimating && animMarquee && !isHoveredOrFocused) {
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
        // For right-to-left movement (original direction)

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
    setIsHoveredOrFocused(true);
    setFocusedIndex(index);
  };

  const handleLogoBlur = () => {
    setIsHoveredOrFocused(false);
    setFocusedIndex(null);
  };

  const handleMouseEnter = () => {
    setIsHoveredOrFocused(true);
  };

  const handleMouseLeave = () => {
    setIsHoveredOrFocused(false);
  };

  const renderLogoStrip = (keyPrefix: string, isInteractive: boolean = true) =>
    logos.map((logo, index) => (
      <div
        key={`${keyPrefix}-${index}`}
        className={styles.logoWrapper}
        style={{ marginRight: `${gap}px` }}
      >
        <a
          href={logo.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-block', width: logo.width }}
          onFocus={() => isInteractive && handleLogoFocus(index)}
          onBlur={() => isInteractive && handleLogoBlur()}
          onMouseEnter={() => isInteractive && handleMouseEnter()}
          onMouseLeave={() => isInteractive && handleMouseLeave()}
          aria-hidden={!isInteractive}
          tabIndex={isInteractive ? undefined : -1}
        >
          <logo.SVG
            fill={color}
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
      // For right-to-left scrolling direction, we need to invert the logic
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
      // Original left-to-right scrolling direction
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
    <div
      className={styles.marqueeWrap}
      style={{ backgroundColor }}
      ref={wrapRef}
    >
      {!REDUCE_MOTION && (
        <button
          type="button"
          className={styles.marqueePauseBtn}
          onClick={() => dispatch({ type: APP_ACTIONS.MARQUEE_TOGGLE })}
          name={animMarquee ? 'pause' : 'resume'}
          aria-label={animMarquee ? 'Pause' : 'Play'}
        >
          {animMarquee ?
            <IconPause color={color} />
          : <IconPlay color={color} />}
        </button>
      )}

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
  );
};
