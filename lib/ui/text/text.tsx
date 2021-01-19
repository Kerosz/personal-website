import { FC, forwardRef, JSXElementConstructor } from 'react';
import { TextWrapper } from './text.styles';
import { HTMLUiProps, SpaceTypes, TypographyTypes } from '../ui.types';

export interface TextOptions extends SpaceTypes, TypographyTypes {
  /** The CSS `color` property */
  color?: string;
  /**
   * Sets the CSS `width` property to `fit-content`
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

/**
 * Used to render a paragraph or any text element
 *
 */
const Text = forwardRef<HTMLElement, TextProps>((props, ref) => {
  const { children, component, to, ...rest } = props;

  return (
    <TextWrapper as={component} href={to} ref={ref} {...rest}>
      {children}
    </TextWrapper>
  );
});

export default Text;
