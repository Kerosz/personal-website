export interface ThemeAction {
  type: 'TOGGLE_THEME';
  theme: ThemeOption;
}

export type ThemeOption = 'light' | 'dark';

export const applyTheme = (newThemeOption: ThemeOption): ThemeAction => {
  return { type: 'TOGGLE_THEME', theme: newThemeOption };
};
