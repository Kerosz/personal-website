import { FC } from 'react';
import { ButtonProps } from './types';
import { ButtonWrapper } from './button.styles';

/**
 * Button Component
 */
const Button: FC<ButtonProps> = (props) => {
  const {
    component = 'button',
    variant = 'default',
    size = 'medium',
    bgColor = 'inherit',
    txtColor = 'black',
    label,
    style = {},
    isDisabled = false,
    isLoading = false,
    ...rest
  } = props;

  return (
    <ButtonWrapper
      as={component}
      size={size}
      variant={variant}
      disabled={isDisabled}
      bgColor={bgColor}
      txtColor={txtColor}
      style={style}
      {...rest}>
      {isLoading ? 'Loading...' : label}
    </ButtonWrapper>
  );
};

export default Button;
