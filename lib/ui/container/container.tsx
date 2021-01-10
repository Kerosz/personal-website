import { FC, forwardRef, JSXElementConstructor } from 'react';
// import { __DEV__ } from '@lib/utils/assertion';
import { HTMLUiProps } from '../ui.types';
import { ContainerWrapper } from './container.styles';

export interface ContainerOptions {
  /**
   * The CSS `max-width` property
   */
  maxW?: string;
  /**
   * The CSS `height` property
   */
  height?: string;
  /**
   * The CSS `margin` property
   */
  m?: string;
  /**
   * The CSS `pedding` property
   */
  p?: string;
  /**
   * Sets the container to `max-width` of `100%`
   */
  fluid?: boolean;
}

export interface ContainerProps extends HTMLUiProps<'div'>, ContainerOptions {
  /**
   * The wrapper element of the component
   */
  component?: string | JSXElementConstructor<any>;
}

/**
 * Used to render a container as `div` with a `max-width` property.
 *
 */
const Container: FC<ContainerProps> = forwardRef((props, containerRef) => {
  const { children, component, maxW = '1260px', ...rest } = props;

  return (
    <ContainerWrapper as={component} ref={containerRef} maxW={maxW} {...rest}>
      {children}
    </ContainerWrapper>
  );
});

// if (__DEV__) {
//   Container.displayName = 'Container';
// }

export default Container;
