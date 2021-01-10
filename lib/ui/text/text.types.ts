import { JSXElementConstructor } from 'react';
import { HTMLUiProps } from '../ui.types';

export interface TextOptions {
  /**
   * The CSS `font-size` property
   */
  size?: string;
  /**
   * The CSS `font-weight` property
   */
  weight?: string | number;
  /**
   * The CSS `line-height` property
   */
  line?: string;
  /**
   * Shorthand for `margin-button` property
   */
  mb?: string;
  /**
   * Shorthand for `margin-top` property
   */
  mt?: string;
  /**
   * Shorthand for `margin-left` property
   */
  ml?: string;
  /**
   * Shorthand for `margin-right` property
   */
  mr?: string;
  /**
   * Shorthand for `margin` property
   */
  m?: string;
  /**
   * Shorthand for `padding` property
   */
  p?: string;
  /**
   * The CSS `text-align` property
   */
  align?: string;
  /**
   * The CSS `text-decoration` property
   */
  decoration?: string;
  /**
   * The CSS `text-transform` property
   */
  casing?: 'uppercase' | 'lowercase';
  /**
   * The CSS `color` property
   */
  color?: string;
  /**
   * The CSS `color` property
   */
  fit?: boolean;
}

export interface TextProps extends HTMLUiProps<'p'>, TextOptions {
  /**
   * The wrapper element of the component
   */
  component?: string | JSXElementConstructor<any>;
  /**
   * The `URL` path
   */
  to?: string;
}
