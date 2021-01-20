import { forwardRef, JSXElementConstructor } from 'react';
import {
  HTMLUiProps,
  SpaceTypes,
  ListTypes,
  TypographyTypes,
} from '../ui.types';
import { ListWrapper, ListItemWrapper } from './list.styles';

interface ListOptions extends SpaceTypes, ListTypes {}

export interface ListProps extends HTMLUiProps<'ul'>, ListOptions {
  /**
   * The wrapper element of the component
   */
  component?: string | JSXElementConstructor<any>;
}

/**
 * List component, it renders a `ul` tag by default.
 */
export const List = forwardRef<HTMLElement, ListProps>((props, ref) => {
  const { children, component, listStyle = 'none', ...restProps } = props;

  return (
    <ListWrapper
      ref={ref}
      as={component}
      listStyle={listStyle}
      role='list'
      {...restProps}>
      {children}
    </ListWrapper>
  );
});

export const OrderedList = forwardRef<HTMLElement, ListProps>((props, ref) => {
  const { children, listStyle = 'decimal', ...restProps } = props;

  return (
    <List ref={ref} component='ol' listStyle={listStyle} {...restProps}>
      {children}
    </List>
  );
});

export const UnorderedList = forwardRef<HTMLElement, ListProps>(
  (props, ref) => {
    const { children, listStyle = 'initial', ...restProps } = props;

    return (
      <List ref={ref} component='ul' listStyle={listStyle} {...restProps}>
        {children}
      </List>
    );
  }
);

export interface ListItemProps
  extends HTMLUiProps<'li'>,
    SpaceTypes,
    TypographyTypes {}

/**
 * List item component, it renders a `li` tag by default.
 */
export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  (props, ref) => {
    return <ListItemWrapper ref={ref} {...props} />;
  }
);
