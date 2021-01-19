import { FC, forwardRef } from 'react';
import { Property } from 'csstype';
import { HTMLUiProps, SpaceTypes } from '../ui.types';
import { ButtonWrapper } from './button.styles';

export interface ButtonOptions extends SpaceTypes {
  /**
   * What type variant to use
   */
  variant?: 'filled' | 'outlined' | 'default';
  /**
   * What background color to use
   */
  bgColor?: Property.BackgroundColor;
  /**
   * What text color to use
   */
  txtColor?: Property.Color;
  /**
   * How large should the button should be ?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Is the component disabled ?
   */
  isDisabled?: boolean;
  /**
   * Is the component state loading ?
   */
  isLoading?: boolean;
}

export interface ButtonProps extends HTMLUiProps<'button'>, ButtonOptions {
  /**
   * The wrapper element of the component
   */
  component?: string | React.JSXElementConstructor<any>;
  /**
   * The `URL` path
   */
  to?: string;
  /**
   * Button contents
   */
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Used to render a `button` element.
 *
 */
const Button: FC<ButtonProps> = forwardRef((props, buttonRef) => {
  const {
    children,
    component = 'button',
    to,
    variant = 'default',
    size = 'medium',
    label,
    style = {},
    isDisabled = false,
    isLoading = false,
    ...rest
  } = props;

  return (
    <ButtonWrapper
      ref={buttonRef}
      as={component}
      href={to}
      size={size}
      variant={variant}
      disabled={isDisabled}
      style={style}
      {...rest}>
      {children ? children : label}
      {isLoading && '...'}
    </ButtonWrapper>
  );
});

export default Button;
