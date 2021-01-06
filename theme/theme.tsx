import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { BaseThemeProps, ThemeModeProps } from './types';
import { useGlobalContext } from '../context/rootContext';
import GlobalStyles from './global-styles';
import darkMode from './modes/dark';
import lightMode from './modes/light';

function themeConstructor(themeBasedOnMode: ThemeModeProps): BaseThemeProps {
  return {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      gray: {
        '100': '#F7FAFC',
        '200': '#EDF2F7',
        '300': '#E2E8F0',
        '400': '#CBD5E0',
        '500': '#A0AEC0',
        '600': '#718096',
        '700': '#4A5568',
        '800': '#2D3748',
        '900': '#1A202C',
      },
    },
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
  const { themeOption } = useGlobalContext();
  const themeBasedOnMode = themeOption === 'light' ? lightMode : darkMode;
  const theme = themeConstructor(themeBasedOnMode);

  return (
    <ThemeProvider theme={{ ...theme, mode: themeOption as string }}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
