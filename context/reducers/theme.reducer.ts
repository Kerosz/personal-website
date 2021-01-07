import { useEffect } from 'react';
import { ThemeAction } from '../actions/theme.action';

export interface ThemeState {
  themeOption: string;
}

export const initialThemeState: ThemeState = {
  themeOption: 'light',
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
