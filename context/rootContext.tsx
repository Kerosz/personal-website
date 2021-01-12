import { createContext, useContext, useReducer, FC, Dispatch } from 'react';
import { __DEV__ } from '@lib/utils/assertion';
import { UiAction } from '@actions/ui.action';
import uiReducer, { initialUiState, UiState } from './reducers/ui.reducer';

interface ContextProps extends UiState {
  uiDispatch: Dispatch<UiAction>;
}

const defaultContextState = ({
  ...initialUiState,
  uiDispatch: null,
} as unknown) as ContextProps;

const GlobalContext = createContext(defaultContextState);

const GlobalContextProvider: FC = ({ children }) => {
  const [ui, uiDispatch] = useReducer(uiReducer, initialUiState);

  const providerValue = {
    ...ui,
    uiDispatch,
  };

  return (
    <GlobalContext.Provider value={providerValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalContextProvider;

if (__DEV__) {
  GlobalContext.displayName = 'GlobalContext';
}
