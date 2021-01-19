import { FC, forwardRef, JSXElementConstructor } from 'react';
import { HTMLUiProps, FlexTypes, SpaceTypes } from '../ui.types';
import { FlexWrapper } from './flex.styles';

export interface FlexOptions extends FlexTypes, SpaceTypes {}

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

export default Flex;
