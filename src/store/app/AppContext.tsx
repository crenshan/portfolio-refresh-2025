import { createContext } from 'react';

import { WorkTag } from '@/models';

export interface AppState {
  showNav: boolean;
  animMarquee: boolean;
  workTags: WorkTag[];
}

export enum APP_ACTIONS {
  NAV_TOGGLE,
  MARQUEE_TOGGLE,
  UPDATE_WORK_TAGS
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
    animMarquee: true,
    workTags: [] as WorkTag[]
  }
};

export const AppContext = createContext<AppContextInterface>(initialAppState);
