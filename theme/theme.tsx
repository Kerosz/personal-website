import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { BaseThemeProps, ThemeModeProps } from './types';
import { useGlobalContext } from '../context/rootContext';
import GlobalStyles from './global-styles';
import darkMode from './modes/dark';
import lightMode from './modes/light';

function themeConstructor(themeBasedOnMode: ThemeModeProps): BaseThemeProps {
  return {
    font: {
      size: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '36px',
        '5xl': '48px',
      },
    },
    ...themeBasedOnMode,
  };
}

const Theme: FC = ({ children }) => {
  const { themeMode } = useGlobalContext();
  const themeBasedOnMode = themeMode === 'Light' ? lightMode : darkMode;
  const theme = themeConstructor(themeBasedOnMode);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
