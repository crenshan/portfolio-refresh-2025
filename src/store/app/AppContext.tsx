import { createContext } from 'react';

export interface AppState {
  showNav: boolean;
  animMarquee: boolean;
}

export enum APP_ACTIONS {
  NAV_TOGGLE,
  MARQUEE_TOGGLE
}

export interface AppActionInterface {
  type: APP_ACTIONS;
  payload?: Partial<AppState>;
}

interface AppContextInterface {
  dispatch: React.Dispatch<AppActionInterface>;
  state: AppState;
}

export const initialAppState: AppContextInterface = {
  dispatch: () => null,
  state: {
    showNav: false,
    animMarquee: true
  }
};

export const AppContext = createContext<AppContextInterface>(initialAppState);
