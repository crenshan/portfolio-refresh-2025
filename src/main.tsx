import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import { LoadSpinner } from '@/components';
import { UNIQUE_CAMPAIGN_ID } from '@/config';

import { AppContextProvider } from './store';

const App = React.lazy(async () => await import('./app/App'));
const root = document.getElementById(`${UNIQUE_CAMPAIGN_ID}`) as Element;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div
          style={{
            width: '100%',
            height: '100%',
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            justifyItems: 'center'
          }}
        >
          <LoadSpinner />
        </div>
      }
    >
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Suspense>
  </React.StrictMode>
);
