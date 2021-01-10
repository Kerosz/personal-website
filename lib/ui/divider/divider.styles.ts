import styled, { css } from 'styled-components';
import { DividerProps } from './divider';

export const DividerWrapper = styled.hr<DividerProps>`
  color: #cbd5e0;

  ${(props) =>
    props.orientation === 'horizontal' &&
    css`
      width: 100%;
      height: 0;
    `};

  ${(props) =>
    props.orientation === 'vertical' &&
    css`
      width: 0;
      height: 100%;
    `};

  ${(props) =>
    props.variant === 'solid' &&
    css`
      border-style: solid;
    `};

  ${(props) =>
    props.variant === 'dashed' &&
    css`
      border-style: dashed;
    `};

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;
