import { FC, forwardRef, JSXElementConstructor } from 'react';
import { HTMLUiProps, SpaceTypes } from '../ui.types';
import { ContainerWrapper } from './container.styles';

export interface ContainerOptions extends SpaceTypes {
  /**
   * The CSS `max-width` property
   */
  maxW?: string;
  /**
   * The CSS `height` property
   */
  height?: string;
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

export default Container;
