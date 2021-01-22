import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { BaseThemeProps, ThemeModeProps } from './theme.types';
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
      green: {
        '100': '#C6F6D5',
        '200': '#9AE6B4',
        '300': '#68D391',
        '400': '#48BB78',
        '500': '#38A169',
        '600': '#2F855A',
        '700': '#276749',
        '800': '#22543D',
        '900': '#1C4532',
      },
      red: {
        '100': '#FED7D7',
        '200': '#FEB2B2',
        '300': '#FC8181',
        '400': '#F56565',
        '500': '#E53E3E',
        '600': '#C53030',
        '700': '#9B2C2C',
        '800': '#822727',
        '900': '#63171B',
      },
    },
    font: {
      family: {
        primary: 'Poppins',
        secondary: 'Major Mono Display',
        heading: 'Segoe UI',
      },
      size: {
        xs: '1.2rem',
        sm: '1.4rem',
        md: '1.6rem',
        lg: '1.8rem',
        xl: '2.0rem',
        '2xl': '2.4rem',
        '3xl': '2.8rem',
        '4xl': '3.6rem',
        '5xl': '4.8rem',
      },
    },
    breakpoints: {
      xxl: '@media screen and (min-width: 100em)',
      xl: '@media screen and (min-width: 80em)',
      lg: '@media screen and (min-width: 62em)',
      md: '@media screen and (min-width: 48em)',
      sm: '@media screen and (min-width: 37.5em)',
      xs: '@media screen and (min-width: 30em)',
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
