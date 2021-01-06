declare module 'styled-components' {
  export interface DefaultTheme extends BaseThemeProps {}
}

export interface ThemeModeProps {
  palette?: {
    background: string;
    text: string;
  };
}

export interface BaseThemeProps extends ThemeModeProps {
  mode?: string;
  colors?: {
    black: string;
    white: string;
    gray: {
      '100': string;
      '200': string;
      '300': string;
      '400': string;
      '500': string;
      '600': string;
      '700': string;
      '800': string;
      '900': string;
    };
  };
  font?: {
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
