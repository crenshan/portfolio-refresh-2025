interface iAppContext {
  appState: ApplicationState;
  appDispatch: React.Dispatch<any>;
}
type tAppContext = iAppContext | Record<string, any>;

interface Window {
  ue: {
    count: () => void;
  };
  opts: {
    language: string | undefined;
  };
  P: any;
  injectComponent: ({
    component: { name: string, version: number },
    nonce: string,
    props: any
  }) => void;
}

interface navigator {
  msMaxTouchPoints: number;
}

interface ImportMetaEnv {
  readonly VITE_DEFAULT_APP_STATE: ActionType;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
