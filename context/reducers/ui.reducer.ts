import { UiAction } from '../actions/ui.action';

export interface UiState {
  themeOption: string;
  isTransition: boolean;
}

export const initialUiState: UiState = {
  themeOption: 'light',
  isTransition: true,
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
        isTransition: action.transition,
      };
    default:
      return state;
  }
}
