import { APP_ACTIONS, type AppState, type AppActionInterface } from '..';

export const appReducer = (state: AppState, action: AppActionInterface) => {
  const { type, payload } = action;

  switch (type) {
    case APP_ACTIONS.NAV_TOGGLE:
      return {
        ...state,
        showNav:
          payload && typeof payload.showNav === 'boolean' ?
            payload.showNav
          : !state.showNav
      };

    case APP_ACTIONS.MARQUEE_TOGGLE:
      return {
        ...state,
        animMarquee: !state.animMarquee
      };

    default:
      return state;
  }
};

export default appReducer;
