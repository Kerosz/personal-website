export interface ThemeAction {
  type: 'TOGGLE_THEME';
  theme: THEME_MODE;
}

export type THEME_MODE = 'Light' | 'Dark';

export const toggleTheme = (newThemeMode: THEME_MODE): ThemeAction => {
  return { type: 'TOGGLE_THEME', theme: newThemeMode };
};
