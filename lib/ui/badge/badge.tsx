import { forwardRef, JSXElementConstructor } from 'react';
import { BadgeWrapper } from './badge.styles';
import { SpaceTypes, HTMLUiProps } from '../ui.types';
import { Property } from 'csstype';

export interface BadgeOptions extends SpaceTypes {
  mainColor?: Property.Color;
  bgColor?: Property.Color;
}

export interface BadgeProps extends HTMLUiProps<'div'>, BadgeOptions {
  /**
   * The wrapper element of the component
   */
  component?: string | JSXElementConstructor<any>;
}

const Badge = forwardRef<HTMLElement, BadgeProps>((props, ref) => {
  const { children, component, ...restProps } = props;

  return (
    <BadgeWrapper ref={ref} as={component} {...restProps}>
      {children}
    </BadgeWrapper>
  );
});

export default Badge;
