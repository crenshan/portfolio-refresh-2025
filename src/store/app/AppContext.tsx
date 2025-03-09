import { createContext } from 'react';

export interface AppState {
  showNav: boolean;
}

export enum APP_ACTIONS {
  NAV_TOGGLE
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
    showNav: false
  }
};

export const AppContext = createContext<AppContextInterface>(initialAppState);
