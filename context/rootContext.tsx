// libraries
import { createContext, useContext, useReducer, FC, useMemo } from 'react';
import { isUndefined, __DEV__ } from '@lib/utils/assertion';

// actions
import {
  ThemeOption,
  applyTheme,
  toggleTransition,
  toggleScroll,
  addActivePath,
  updateCursorType,
} from '@actions/ui.action';

// reducers
import uiReducer, { initialUiState, UiState } from './reducers/ui.reducer';

interface ContextProps extends UiState {
  setThemeMode: (theme: ThemeOption) => void;
  setActivePath: (path: string) => void;
  setCursorType: (type: string) => void;
  toggleTransitionState: () => void;
  toggleScrollState: () => void;
}

const defaultContextState = ({
  ...initialUiState,
  dispatch: null,
} as unknown) as ContextProps;

export const GlobalContext = createContext(defaultContextState);

const GlobalContextProvider: FC = (props) => {
  const [ui, uiDispatch] = useReducer(uiReducer, initialUiState);

  const setThemeMode = (theme: ThemeOption) => uiDispatch(applyTheme(theme));
  const setActivePath = (path: string) => uiDispatch(addActivePath(path));
  const setCursorType = (type: string) => uiDispatch(updateCursorType(type));
  const toggleTransitionState = () => uiDispatch(toggleTransition());
  const toggleScrollState = () => uiDispatch(toggleScroll());

  const providerValue = useMemo(
    () => ({
      ...ui,
      setThemeMode,
      setActivePath,
      setCursorType,
      toggleTransitionState,
      toggleScrollState,
    }),
    [ui]
  );

  return <GlobalContext.Provider value={providerValue} {...props} />;
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (isUndefined(context)) {
    throw new Error(`Context must be used within a ContextProvider`);
  }

  return context;
};

export default GlobalContextProvider;

if (__DEV__) {
  GlobalContext.displayName = 'GlobalContext';
}
