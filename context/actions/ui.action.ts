export type UiAction =
  | {
      type: 'TOGGLE_THEME';
      theme: ThemeOption;
    }
  | {
      type: 'TOGGLE_TRANSITION';
    }
  | {
      type: 'TOGGLE_SCROLL';
    }
  | {
      type: 'ADD_ACTIVE_PATH';
      path: string;
    }
  | {
      type: 'UPDATE_CURSOR_TYPE';
      cursor: string;
    };

export type ThemeOption = 'light' | 'dark';

export const applyTheme = (newThemeOption: ThemeOption): UiAction => {
  return { type: 'TOGGLE_THEME', theme: newThemeOption };
};

export const toggleTransition = (): UiAction => {
  return { type: 'TOGGLE_TRANSITION' };
};

export const toggleScroll = (): UiAction => {
  return { type: 'TOGGLE_SCROLL' };
};

export const addActivePath = (newActivePath: string): UiAction => {
  return { type: 'ADD_ACTIVE_PATH', path: newActivePath };
};

export const updateCursorType = (newCursorType: string): UiAction => {
  return { type: 'UPDATE_CURSOR_TYPE', cursor: newCursorType };
};
