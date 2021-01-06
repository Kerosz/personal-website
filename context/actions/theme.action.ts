export interface ThemeAction {
  type: 'TOGGLE_THEME';
  theme: THEME_OPTION;
}

export type THEME_OPTION = 'light' | 'dark';

export const applyTheme = (newThemeOption: THEME_OPTION): ThemeAction => {
  return { type: 'TOGGLE_THEME', theme: newThemeOption };
};
