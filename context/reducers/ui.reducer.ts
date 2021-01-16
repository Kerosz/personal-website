import { UiAction } from '../actions/ui.action';

export interface UiState {
  themeOption: string;
  isTransition: boolean;
  canScroll: boolean;
}

export const initialUiState: UiState = {
  themeOption: 'dark',
  isTransition: true,
  canScroll: false,
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
    default:
      return state;
  }
}
