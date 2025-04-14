import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import { FontLoader, Footer, Hero, MainNav, SkipLink } from '@/components';
import * as configs from '@/config';

import styles from './App.module.css';

const FocusWrap = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    setTimeout(() => {
      document.documentElement.scrollTo(0, 0);
    }, 0);
  }, [location.pathname]);
  return children;
};

const AppRoutes = () => {
  const location = useLocation();

  return (
    <div
      id="content"
      className={styles.content}
    >
      <Routes
        location={location}
        key={`routes_${location.pathname}`}
      >
        {configs.routes.map((route, idx) => (
          <Route
            key={`route_${route.key}_${idx}`}
            path={route.path}
            id={route.key}
            element={<route.element />}
          />
        ))}
      </Routes>
    </div>
  );
};

const App = (): React.ReactElement => (
  <>
    <SkipLink>Skip to content</SkipLink>

    <FontLoader />

    <BrowserRouter>
      <FocusWrap>
        <MainNav />

        <Hero />

        <AppRoutes />

        <Footer />
      </FocusWrap>
    </BrowserRouter>
  </>
);

export default App;
