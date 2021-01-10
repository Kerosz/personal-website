declare module 'styled-components' {
  export interface DefaultTheme extends BaseThemeProps {}
}

export interface ThemeModeProps {
  palette: {
    background: string;
    text: {
      main: string;
      accent: string;
    };
  };
}

export interface ThemeColors {
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
}

export interface BaseThemeProps extends ThemeModeProps {
  mode?: string;
  colors: {
    black: string;
    white: string;
    gray: ThemeColors;
    green: ThemeColors;
    red: ThemeColors;
  };
  font: {
    family: {
      primary: string;
      secondary: string;
    };
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
  /**
   * Theme breakpoints values
   */
  breakpoints: {
    /**
     * Breakpoint for `1280px` and above
     */
    xl: string;
    /**
     * Breakpoint for `992px` and above
     */
    lg: string;
    /**
     * Breakpoint for `768px` and above
     */
    md: string;
    /**
     * Breakpoint for `600px` and above
     */
    sm: string;
    /**
     * Breakpoint for `480px` and above
     */
    xs: string;
  };
}
