declare module 'styled-components' {
  export interface DefaultTheme extends BaseThemeProps {}
}

export interface ThemeModeProps {
  palette: {
    background: string;
    text: string;
  };
}

export interface BaseThemeProps extends ThemeModeProps {
  font: {
    size: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
    };
  };
}
