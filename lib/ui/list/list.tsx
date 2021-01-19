import { forwardRef, JSXElementConstructor } from 'react';
import { HTMLUiProps, SpaceTypes, ListTypes } from '../ui.types';
import { ListWrapper } from './list.styles';

interface ListOptions extends SpaceTypes, ListTypes {}

export interface ListProps extends HTMLUiProps<'ul'>, ListOptions {
  /**
   * The wrapper element of the component
   */
  component?: string | JSXElementConstructor<any>;
}

export const List = forwardRef<HTMLElement, ListProps>((props, ref) => {
  const { children, component, ...rest } = props;

  return (
    <ListWrapper ref={ref} as={component} {...rest}>
      {children}
    </ListWrapper>
  );
});
