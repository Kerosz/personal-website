import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { ButtonProps } from './button';

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
      border-color: black;
      background-color: black;
      color: white;
    `,
    dark: css`
      border-color: white;
      background-color: white;
      color: black;
    `,
  },
  outlined: {
    light: css`
      border-color: black;
      color: black;
    `,
    dark: css`
      border-color: white;
      color: white;
    `,
  },
}) as any;

export const ButtonWrapper = styled.button<ButtonProps>`
  display: inline-block;
  height: fit-content;
  width: fit-content;
  font-weight: 700;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  background: transparent;
  border: 0.4rem solid transparent;
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

  
  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `};

  ${(props) =>
    props.m &&
    css`
      margin: ${props.m};
    `};

  ${(props) =>
    props.mt &&
    css`
      margin-top: ${props.mt};
    `};

  ${(props) =>
    props.mb &&
    css`
      margin-bottom: ${props.mb};
    `};

  ${(props) =>
    props.ml &&
    css`
      margin-left: ${props.ml};
    `};

  ${(props) =>
    props.mr &&
    css`
      margin-right: ${props.mr};
    `};

  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `};

  ${(props) =>
    props.p &&
    css`
      padding: ${props.p};
    `};

  ${(props) =>
    props.pt &&
    css`
      margin-top: ${props.pt};
    `};

  ${(props) =>
    props.pb &&
    css`
      margin-bottom: ${props.pb};
    `};

  ${(props) =>
    props.pl &&
    css`
      margin-left: ${props.pl};
    `};

  ${(props) =>
    props.pr &&
    css`
      margin-right: ${props.pr};
    `};
`;
