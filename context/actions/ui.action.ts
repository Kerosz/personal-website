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
