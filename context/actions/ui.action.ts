export type UiAction =
  | {
      type: 'TOGGLE_THEME';
      theme: ThemeOption;
    }
  | {
      type: 'TOGGLE_TRANSITION';
      transition: boolean;
    };

export type ThemeOption = 'light' | 'dark';

export const applyTheme = (newThemeOption: ThemeOption): UiAction => {
  return { type: 'TOGGLE_THEME', theme: newThemeOption };
};

export const toggleTransition = (newTransition: boolean): UiAction => {
  return { type: 'TOGGLE_TRANSITION', transition: newTransition };
};
