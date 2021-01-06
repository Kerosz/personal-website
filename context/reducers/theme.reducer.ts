import { ThemeAction } from '../actions/theme.action';

export interface ThemeState {
  themeOption: string;
}

let defaultThemeMode;
// Checking to see if we render on the client side
if (typeof window !== 'undefined') {
  const themeModeFromStorage = localStorage.getItem('theme-mode');

  // Check to see if the item from local storage is defined
  if (themeModeFromStorage) {
    defaultThemeMode = themeModeFromStorage;
  }
}

export const initialThemeState: ThemeState = {
  themeOption: defaultThemeMode || 'light',
};

export default function themeReducer(state: ThemeState, action: ThemeAction) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        themeOption: action.theme,
      };
    default:
      return state;
  }
}
