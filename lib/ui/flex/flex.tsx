// import { __DEV__ } from '@lib/utils/assertion';
import { FC, forwardRef, JSXElementConstructor } from 'react';
import { HTMLUiProps } from '../ui.types';
import { FlexWrapper } from './flex.styles';

export interface FlexOptions {
  /**
   * The CSS `align-items` property
   */
  align?: string;
  /**
   * The CSS `justify-content` property
   */
  justify?: string;
  /**
   * The CSS `flex-wrap` property
   */
  wrap?: string;
  /**
   * The CSS `flex-direction` property
   */
  direction?: string;
  /**
   * The CSS `flex-basis` property
   */
  basis?: string | number;
  /**
   * The CSS `flex-grow` property
   */
  grow?: string | number;
  /**
   * The CSS `flex-shrink` property
   */
  shrink?: string | number;
}

export interface FlexProps extends HTMLUiProps<'div'>, FlexOptions {
  /**
   * The wrapper `element` of the component
   */
  component?: string | JSXElementConstructor<any>;
  /**
   * Sets the flex `height` to 0
   */
  noHeight?: boolean;
  /**
   * Shorthand for `margin` property
   */
  m?: string;
  /**
   * Shorthand for `padding` property
   */
  p?: string;
  /**
   * The CSS `width` property
   */
  width?: string;
}

/**
 * Used to render a `div` with the css property set to `flex`.
 *
 */
const Flex = forwardRef<HTMLElement, FlexProps>((props, ref) => {
  const { children, component, ...rest } = props;

  return (
    <FlexWrapper ref={ref} as={component} {...rest}>
      {children}
    </FlexWrapper>
  );
});

// if (__DEV__) {
//   Flex.displayName = 'Flex';
// }

export default Flex;
