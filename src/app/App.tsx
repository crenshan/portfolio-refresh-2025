import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import { FontLoader, Footer, Hero, MainNav, SkipLink } from '@/components';
import * as configs from '@/config';

const AppRoutes = () => {
  const location = useLocation();

  return (
    <div id="content">
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
      <MainNav />

      <Hero />

      <AppRoutes />

      <Footer />
    </BrowserRouter>
  </>
);

export default App;
