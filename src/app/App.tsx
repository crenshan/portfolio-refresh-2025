import React from 'react';

import { FontLoader, MainNav } from '@/components';
import { Hero } from '@/sections';

const App = (): React.ReactElement => (
  <>
    <FontLoader />

    <div>
      <MainNav />

      <Hero />
    </div>
  </>
);

export default App;
