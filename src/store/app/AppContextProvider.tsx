import { useReducer, useMemo, PropsWithChildren } from 'react';

import { AppContext, initialAppState } from './AppContext';
import { appReducer } from './AppReducer';

export const AppContextProvider = ({
  children
}: PropsWithChildren<Record<never, never>>) => {
  const [state, dispatch] = useReducer(
    appReducer,
    initialAppState.state as never
  );
  const memoizedApp = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <AppContext.Provider value={memoizedApp}>{children}</AppContext.Provider>
  );
};
