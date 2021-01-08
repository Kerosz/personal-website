import { FC, forwardRef, JSXElementConstructor } from 'react';
import { __DEV__ } from '@lib/utils/assertion';
import { TextWrapper } from './text.styles';
import { HTMLUiProps } from '../ui.types';

interface TextOptions {
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
}

export interface TextProps extends HTMLUiProps<'p'>, TextOptions {
  /**
   * The wrapper element of the component
   */
  component?: string | JSXElementConstructor<any>;
}

/**
 * Used to render a paragraph or any text element
 *
 */
const Text: FC<TextProps> = forwardRef((props, textRef) => {
  const { children, component, ...rest } = props;

  return (
    <TextWrapper as={component} ref={textRef} {...rest}>
      {children}
    </TextWrapper>
  );
});

if (__DEV__) {
  Text.displayName = 'Text';
}

export default Text;
