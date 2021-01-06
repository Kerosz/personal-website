import { ButtonHTMLAttributes, JSXElementConstructor } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * What type variant to use
   */
  component?: string | JSXElementConstructor<any>;
  /**
   * What type variant to use
   */
  variant?: 'filled' | 'outlined' | 'default';
  /**
   * What background color to use
   */
  bgColor?: string;
  /**
   * What text color to use
   */
  txtColor?: string;
  /**
   * How large should the button should be ?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Is the component disabled ?
   */
  isDisabled?: boolean;
  /**
   * Is the component state loading ?
   */
  isLoading?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
