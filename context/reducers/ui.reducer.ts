import { UiAction } from '../actions/ui.action';

export interface UiState {
  themeOption: string;
  isTransition: boolean;
  canScroll: boolean;
  activePath: string;
  cursorType: string;
  cursorStyle: string[];
}

export const initialUiState: UiState = {
  themeOption: 'dark',
  isTransition: true,
  canScroll: false,
  activePath: '/',
  cursorType: 'default',
  cursorStyle: ['default', 'hovered'],
};

export default function uiReducer(state: UiState, action: UiAction) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        themeOption: action.theme,
      };
    case 'TOGGLE_TRANSITION':
      return {
        ...state,
        isTransition: !state.isTransition,
      };
    case 'TOGGLE_SCROLL':
      return {
        ...state,
        canScroll: !state.canScroll,
      };
    case 'ADD_ACTIVE_PATH':
      return {
        ...state,
        activePath: action.path,
      };
    case 'UPDATE_CURSOR_TYPE':
      return {
        ...state,
        cursorType: action.cursor,
      };
    default:
      return state;
  }
}
