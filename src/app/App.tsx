import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { FontLoader, MainNav, ResponsiveImage } from '@/components';
import { Hero } from '@/sections';
import { cocaColaContactless } from '@/assets/work/cocaCola';

const AnimatedRoutes = () => {
  const location = useLocation();

  // check if browser has accessibility option for 'reduced motion' active
  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  // animation options for page transitions
  let animProps: { [key: string]: { [key: string]: string | number } } = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { ease: 'easeOut', duration: 0.5 }
  };

  // if 'reduce motion' is enabled, remove the animation options
  if (reduceMotion) animProps = {};

  return (
    <AnimatePresence>
      <Routes
        location={location}
        key={`routes_${location.pathname}`}
      >
        <Route
          path="/"
          id="hone"
          element={
            <motion.main {...animProps}>
              <h1>HOME</h1>

              <ResponsiveImage img={cocaColaContactless} />
            </motion.main>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = (): React.ReactElement => (
  <>
    <FontLoader />

    <div>
      <BrowserRouter>
        <>
          <MainNav />

          <Hero />

          <AnimatedRoutes />
        </>
      </BrowserRouter>
    </div>
  </>
);

export default App;
