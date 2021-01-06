import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { ButtonProps } from './types';

const buttonVariants = theme.variants('mode', 'variant', {
  default: {
    light: css`
      color: black;
    `,
    dark: css`
      color: white;
    `,
  },
  filled: {
    light: css`
      border: 0.4rem solid black;
      background-color: black;
      color: white;
    `,
    dark: css`
      border: 0.4rem solid white;
      background-color: white;
      color: black;
    `,
  },
  outlined: {
    light: css`
      border: 0.4rem solid black;
      color: black !important;
    `,
    dark: css`
      border: 0.4rem solid white;
      color: white !important;
    `,
  },
}) as any;

export const ButtonWrapper = styled.button<ButtonProps>`
  display: inline-block;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  border: 2px solid transparent;
  outline: none;
  cursor: pointer;

  ${(props) => {
    if (props.size === 'small') {
      return css`
        font-size: 13px;
        padding: 8px 10px;
      `;
    }
    if (props.size === 'medium') {
      return css`
        font-size: 15px;
        padding: 9px 14px;
      `;
    }
    if (props.size === 'large') {
      return css`
        font-size: 17px;
        padding: 10px 18px;
      `;
    }
  }}

  ${buttonVariants}

  background-color: ${(props) => props.bgColor && props.bgColor};
  color: ${(props) => props.txtColor && props.txtColor};
`;
