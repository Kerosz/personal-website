import { ThemeAction } from '../actions/theme.action';

export interface ThemeState {
  themeMode: string;
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
  themeMode: defaultThemeMode || 'Light',
};

export default function themeReducer(state: ThemeState, action: ThemeAction) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        themeMode: action.theme,
      };
    default:
      return state;
  }
}
